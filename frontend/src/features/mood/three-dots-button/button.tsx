import { ThreeDotsIcon } from "@/shared/ui/icons"
import { IThreeDotsButtonProps } from "./button.types"
import styles from './buton.module.css'

export function ThreeDotsButton(props: IThreeDotsButtonProps) {
	const { onClick } = props

	return (
		<button onClick={onClick} className={styles.container}>
			<ThreeDotsIcon width={42} height={42} stroke="#000" strokeWidth={2} />
		</button>
	)
}
