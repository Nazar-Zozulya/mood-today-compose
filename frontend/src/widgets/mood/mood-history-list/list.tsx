import { Mood } from "@/entities/mood/model/types"
import { DayMoodCard } from "../day-mood-card"
import styles from "./list.module.css"
import { useMoodStore } from "@/entities/mood/model/store"
import { useEffect } from "react"

export function MoodHistoryList() {
	const moodHistory = useMoodStore((set) => set.moodHistory)

	useEffect(() => {
		console.log("historyPedik: ", moodHistory)
	}, [moodHistory])

	return (
		<div className={styles.container}>
			{moodHistory?.map((mood) => {
				return (
					<DayMoodCard
						key={mood.id}
						id={mood.id}
						userId={mood.userId}
						answeredAt={mood.answeredAt}
						mood={mood.mood}
					/>
				)
			})}
		</div>
	)
}
