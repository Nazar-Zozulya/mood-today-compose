import { SmileButton } from "@/features/mood/smile-button";
import styles from './select.module.css'
import { EmotionsList } from "@/entities/mood/model/types";



export function SelectMood() {


    const EmotionsList: EmotionsList  = [
        "excited",
        "happy",
        "sad",
        "angry",
    ]

    return (
        <div className={styles.container}>
            <p className={styles.title}>What’s your mood today?</p>
            <div className={styles.moodsContainer}>
                { EmotionsList.map((emotion)=> {
                    return(
                        <SmileButton icon={`/assets/images/${emotion}.png`} emotion={emotion} />
                    )
                }) }
            </div>
        </div>
    )
}