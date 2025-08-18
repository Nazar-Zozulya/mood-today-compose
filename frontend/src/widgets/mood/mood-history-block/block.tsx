import { useState } from "react"
import styles from "./block.module.css"
import { ThreeDotsButton } from "@/features/mood/three-dots-button"
import { MoodHistoryList } from "../mood-history-list"
import { useUserContext } from "@/entities/user/model/context/user.context"

export function MoodHistoryBlock() {
	const [isVisible, setIsVisible] = useState(false)
	const { user } = useUserContext()

	return (
		<>
			{user && (
				<div className={styles.container}>
					<ThreeDotsButton onClick={() => setIsVisible(!isVisible)} />

					{isVisible && <MoodHistoryList />}
				</div>
			)}
		</>
	)
}
