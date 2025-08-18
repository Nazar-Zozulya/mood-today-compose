import { LogoutIcon } from '@/shared/ui/icons'
import styles from './card.module.css'
import { LogoutButton } from '@/features/user/logout-button'
import { useUserContext } from '@/entities/user/model/context/user.context'


export function UserCard() {
    const { user } = useUserContext()


    return(
        <div className={styles.container}>
            <p className={styles.name}>{user?.username}</p>
            <LogoutButton />
        </div>
    )
}