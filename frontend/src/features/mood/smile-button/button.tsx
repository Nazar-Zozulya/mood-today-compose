import { ISmileButtonProps } from "./button.types"
import styles from "./button.module.css"
import { useMoodStore } from "@/entities/mood/model/store"
import { useUserContext } from "@/entities/user/model/context/user.context"

export function SmileButton(props: ISmileButtonProps) {
	const createMood = useMoodStore((state) => state.createMood)
	const { token } = useUserContext()

	return (
		<button
			onClick={() => {
				if (!token) return
				createMood(props.emotion, token)
			}}
			className={styles.button}
		>
			<img src={props.icon} alt="" className={styles.image} />
		</button>
	)
}
