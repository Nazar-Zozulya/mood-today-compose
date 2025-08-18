import { MainPage } from "@/pages/main-page"
import { AppProviders } from "./providers"
import { useUserContext } from "@/entities/user/model/context/user.context"
import { useEffect } from "react"
import { useMoodStore } from "@/entities/mood/model/store"
import { AppInit } from "./init"

export function App() {
	return (
		<AppProviders>
            <AppInit>
                <MainPage />
            </AppInit>
		</AppProviders>
	)
}
