import { Emotions } from "@/entities/mood/model/types";

export interface MoodStreak {
    days: number,
    mood: Emotions
}