import { Input } from "@/shared/ui/input"
import { Controller, useForm } from "react-hook-form"
import { ILoginOrRegisterForm } from "./form.types"
import styles from "./from.module.css"
import { useUserContext } from "@/entities/user/model/context/user.context"

export function LoginOrRegisterForm() {
	const { control, handleSubmit, formState } = useForm<ILoginOrRegisterForm>()
	const { loginOrRegister } = useUserContext()

	async function onSubmit(data: ILoginOrRegisterForm) {
		console.log(data.username)
		const result = await loginOrRegister(data.username)
	}

	// Получаем register объект отдельно, чтобы прокинуть ref и остальные props отдельно
	// const usernameRegister = register("username", {
	//     required: "username is required",
	// });

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="username"
					control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'username is required'
                        }
                    }}
					render={({ field, fieldState }) => {
						return (
							<Input
								value={field.value}
								onChange={field.onChange}
								placeholder="username"
								error={fieldState.error?.message}
							/>
						)
					}}
				/>

				<button type="submit" className={styles.submitButton}>
					<p className={styles.buttonText}>submit</p>
				</button>
			</form>
		</div>
	)
}
