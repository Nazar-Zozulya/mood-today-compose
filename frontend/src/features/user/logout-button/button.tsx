import { LogoutIcon } from "@/shared/ui/icons";
import styles from './button.module.css'
import { useUserContext } from "@/entities/user/model/context/user.context";


export function LogoutButton() {
    const {logout} = useUserContext()
    return (
        <button className={styles.logoutButton} onClick={()=> logout()}>
            <LogoutIcon width={24} height={24} stroke={'#CCF2FF'} strokeWidth={3} />
        </button>
    )
}