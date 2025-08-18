import styles from "./page.module.css"
import { StreakBlock } from "@/widgets/mood/streak-block"
import { MoodHistoryBlock } from "@/widgets/mood/mood-history-block"
import { UserBlock } from "@/widgets/user/ui/user-block/block"
import { SelectMoodBlock } from "@/widgets/mood/select-mood-block"
import { useUserContext } from "@/entities/user/model/context/user.context"

// import starIcon from '@/';

export function MainPage() {
	const { user } = useUserContext()

	return (
		<div className={`${styles.container} ${!user ? styles.rightItems  : ''}`}>
			{!user ? null : (
				<>
					<div className={styles.leftBlock}>
						<StreakBlock />
						<MoodHistoryBlock />
					</div>
					<SelectMoodBlock />
				</>
			)}
			<UserBlock />
		</div>
	)
}
