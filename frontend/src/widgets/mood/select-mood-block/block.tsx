import { useState } from "react"
import styles from './block.module.css'
import { useMoodStore } from "@/entities/mood/model/store"
import { SelectedMood } from "../selected-mood"
import { SelectMood } from "../select-mood/select"



export function SelectMoodBlock() {

    const lastAnswer = useMoodStore((set)=> set.lastAnswer)

    return (
        <div className={styles.container}>
            { lastAnswer.isAnswered === true ? 
                <SelectedMood mood={lastAnswer.mood} /> :
                <SelectMood />
            }
        </div>
    )
}