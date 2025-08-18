import { create } from "zustand"
import { getMsUntilMidnight } from "@/shared/tools"
import { Result } from "@/shared/types/result"
import { GET, POST } from "@/shared/api"
import { Emotions, Mood } from "../types"

interface MoodStoreState {
    moodHistory: Mood[] | null
    lastAnswer: { isAnswered: true; mood: Emotions } | { isAnswered: false }
}

interface MoodStoreAction {
    getMoodHistory: (token: string) => Promise<Result<Mood[]>>
    createMood: (mood: Emotions, token: string) => Promise<Result<Mood>>
    setLastAnswer: (answer: { isAnswered: true; mood: Emotions } | { isAnswered: false }) => void
    clearTimer: () => void
}

let currentTimeout: ReturnType<typeof setTimeout> | null = null

export const useMoodStore = create<MoodStoreState & MoodStoreAction>((set, get) => ({
    moodHistory: null,
    lastAnswer: { isAnswered: false },

    getMoodHistory: async (token) => {
        try {
            const result = await GET<Mood[]>({
                endpoint: "api/mood/history",
                token,
            })

            if (result.status === "error") {
                return result
            }

            set({ moodHistory: result.data })

            return result
        } catch (err) {
            return { status: "error", message: `${err}` }
        }
    },

    createMood: async (mood, token) => {
        try {
            const result = await POST<Mood>({
                endpoint: "api/mood/create",
                body: { mood },
                token,
            })

            if (result.status === "error") {
                return result
            }

            const moodHistory = get().moodHistory || []

            set({
                moodHistory: [...moodHistory, result.data],
            })

            get().setLastAnswer({ isAnswered: true, mood: result.data.mood })

            return result
        } catch (err) {
            return { status: "error", message: `${err}` }
        }
    },

    setLastAnswer: (answer) => {
        if (currentTimeout) {
            clearTimeout(currentTimeout)
            currentTimeout = null
        }

        set({ lastAnswer: answer })

        if (answer.isAnswered) {
            const msUntilMidnight = getMsUntilMidnight()

            currentTimeout = setTimeout(() => {
                get().setLastAnswer({ isAnswered: false })
                currentTimeout = null
            }, msUntilMidnight)
        }
    },

    clearTimer: () => {
        if (currentTimeout) {
            clearTimeout(currentTimeout)
            currentTimeout = null
            set({ lastAnswer: { isAnswered: false } })
        }
    }
}))
