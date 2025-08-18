import { useUserContext } from "@/entities/user/model/context/user.context"
import styles from "./block.module.css"
import { UserCard } from "../user-card"
import { LoginOrRegisterForm } from "../login-and-register-form"

export function UserBlock() {
	const { user } = useUserContext()

	return (
		<div className={styles.container }>
			{user ? <UserCard /> : <LoginOrRegisterForm />}
		</div>
	)
}
