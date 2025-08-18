import { Mood } from '@/entities/mood/model/types'
import styles from './card.module.css'

export function DayMoodCard(props: Mood) {
    const { mood, answeredAt } = props

    function parseDate(date: string) {
        const newDate = new Date(date)
        const month = newDate.getMonth()
        const day = newDate.getDate()

        const formattedDay = day < 10 ? `0${day}` : `${day}`
        const formattedMonth = month < 10 ? `0${month}` : `${month}`

        return formattedMonth + '.' + formattedDay
    }

    return (
        <div className={styles.container}>
            <p className={styles.dayText}>{parseDate(answeredAt)}</p>
            <img className={styles.moodIcon} src={`/assets/images/${mood}.png`} alt="" />
        </div>
    )
}