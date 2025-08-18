import { Mood } from "@/entities/mood/model/types";


export type User = {
    id: number;
    username: string;
    MoodHistory: Mood[]
}
