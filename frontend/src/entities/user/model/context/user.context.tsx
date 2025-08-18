import { Result } from "@/shared/types/result"
import { User } from "../types"
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react"
import { GET, POST } from "@/shared/api"
import { useMoodStore } from "@/entities/mood/model/store"

interface UserContextType {
	user: User | null
	setUser: (user: User | null) => void
	token: string | null
	setToken: (token: string | null) => void
	loginOrRegister: (username: string) => Promise<Result<string>>
	getUser: (token: string) => Promise<Result<User>>
	isAuthenticated: () => boolean
	logout: () => void
}

const initialValue: UserContextType = {
	user: null,
	setUser: () => {},
	token: null,
	setToken: () => {},
	loginOrRegister: async () => {
		return { status: "error", message: "function not found" }
	},
	getUser: async () => {
		return { status: "error", message: "function not found" }
	},
	isAuthenticated: () => false,
	logout: () => {}
}

const UserContext = createContext<UserContextType>(initialValue)

export function useUserContext() {
	return useContext(UserContext)
}

interface UserContextProviderProps {
	children: ReactNode
}

export function UserContextProvider(props: UserContextProviderProps) {
	const [user, setUser] = useState<User | null>(null)
	const [token, setToken] = useState<string | null>(null)
	const clearTimer = useMoodStore((use)=> use.clearTimer)

	async function loginOrRegister(username: string): Promise<Result<string>> {
		try {
			const result = await POST<string>({
				endpoint: "api/user/login-or-register",
				body: { username },
			})

			if (result.status === "error") {
				return result
			}

			setToken(result.data)

			return result
		} catch (err) {
			return { status: "error", message: `${err}` }
		}
	}

	async function getUser(token: string): Promise<Result<User>> {
		try {
			const result = await GET<User>({
				endpoint: "api/user/get-user",
				token,
			})

			if (result.status === "error") {
				return result
			}

			setUser(result.data)


			return result
		} catch (err) {
			return { status: "error", message: `${err}` }
		}
	}

	function isAuthenticated(): boolean {
		if (!user) return false
		return true
	}

	function logout() {
		console.log('fgg')
		setUser(null)
		setToken(null)
		clearTimer()
		localStorage.removeItem('token')

	}

	useEffect(() => {
		const token = localStorage.getItem("token")

		if (!token) return

		setToken(token)
	}, [])

	// useEffect(()=>{
	// 	if (!user) return
	// 	console.log("user: ", user)
	// }, [user])

	useEffect(() => {
		if (!token) return
		// console.log("token:", token)
		localStorage.setItem("token", token)
		getUser(token)
	}, [token])

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				token,
				setToken,
				loginOrRegister,
				getUser,
				isAuthenticated,
				logout,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}
