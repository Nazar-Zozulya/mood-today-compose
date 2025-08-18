import { useMoodStore } from "@/entities/mood/model/store"
import { useUserContext } from "@/entities/user/model/context/user.context"
import { getMsUntilMidnight } from "@/shared/tools"
import { ReactNode, useEffect } from "react"

interface AppInitProps {
	children: ReactNode
}

export function AppInit(props: AppInitProps) {
	const { token, user } = useUserContext()
	const getMoodHistory = useMoodStore((state) => state.getMoodHistory)
	const setLastAnswer = useMoodStore((state) => state.setLastAnswer)

	useEffect(() => {
		async function getHistory() {
			if (!token) return
			const history = await getMoodHistory(token)

			if (history.status === "error") return

			const lastMood = history.data[history.data.length - 1]
			if (!lastMood) return

			const lastMoodDate = new Date(lastMood.answeredAt).getDate()

			const today = new Date().getDate()
			if (!user) return

			if (lastMoodDate === today) {
				setLastAnswer({ isAnswered: true, mood: lastMood.mood })
			}
		}
		
		getHistory()
		
	}, [token, user, getMoodHistory, setLastAnswer])

	return <>{props.children}</>
}
