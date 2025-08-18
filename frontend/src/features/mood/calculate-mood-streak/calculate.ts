import { MoodStreak } from "./calculate.types"
import { Mood } from "@/entities/mood/model/types"

export function calculateMoodStreak(moodHistory: Mood[] | null): MoodStreak | null {
    if (!moodHistory || moodHistory.length === 0) return null

    // Берём последнее настроение (последний элемент массива)
    const lastMood = moodHistory[moodHistory.length - 1].mood

    let streakCount = 0

    // Идём по истории с конца и считаем подряд идущие одинаковые настроения
    for (let i = moodHistory.length - 1; i >= 0; i--) {
        if (moodHistory[i].mood === lastMood) {
            streakCount++
        } else {
            break
        }
    }

    console.log("count: ", streakCount, " mood: ", lastMood)

    return { days: streakCount, mood: lastMood }
}
