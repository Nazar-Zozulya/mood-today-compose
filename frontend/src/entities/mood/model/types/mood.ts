import { Emotions } from "./emotions"

export type Mood = {
    id: number,
    answeredAt: string
    mood: Emotions
    userId: number
}