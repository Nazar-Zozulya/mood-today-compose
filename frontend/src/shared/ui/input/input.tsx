import { IInputProps } from "./input.types"
import styles from "./input.module.css"

export function Input(props: IInputProps ) {
	const { type = "text", placeholder, error, inputRef, ...rest } = props

	return (
		<div>
			<input
				ref={inputRef}
				type={type}
				placeholder={placeholder}
				className={[styles.input, styles.text].join(" ")}
				{...rest}
			/>
			<p className={styles.error}>{error}</p>
		</div>
	)
}
