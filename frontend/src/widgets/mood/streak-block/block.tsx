import { calculateMoodStreak } from "@/features/mood/calculate-mood-streak"
import styles from "./block.module.css"
import { useEffect, useState } from "react"
import { useMoodStore } from "@/entities/mood/model/store"
import { MoodStreak } from "@/features/mood/calculate-mood-streak/calculate.types"

export function StreakBlock() {
	const moodHistory = useMoodStore((set) => set.moodHistory)

	const [streakInfo, setStreakInfo] = useState<MoodStreak | null>(null)

	useEffect(() => {
		if (!moodHistory) return
		const newStreak = calculateMoodStreak(moodHistory)

		setStreakInfo(newStreak)
	}, [moodHistory])

	return (
		<>
			{!streakInfo || streakInfo.days === 0 || streakInfo.days === 1 ? null : (
				<div className={styles.container}>
					<img
						src="/assets/images/fire.png"
						className={styles.fireIcon}
					/>
					<p
						className={styles.streakText}
					>{`${streakInfo?.mood} streak ${streakInfo?.days} days `}</p>
				</div>
			)}
		</>
	)
}
