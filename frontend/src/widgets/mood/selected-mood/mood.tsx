import { SelectedMoodProps } from "./mood.types";
import styles from './mood.module.css'



export function SelectedMood(props: SelectedMoodProps) {


    return (
        <div className={styles.container}>
            <p className={styles.title} >Your mood today: {props.mood}</p>
            <img src={`/assets/images/${props.mood}.png`} alt=""  className={styles.image}/>
        </div>
    )
}