import { UserContextProvider } from "@/entities/user/model/context/user.context"
import { ReactNode } from "react"


interface IAppProvidersProps {
    children: ReactNode
}


export function AppProviders(props: IAppProvidersProps){ 

    return (
        <UserContextProvider>
            {props.children}
        </UserContextProvider>
    )
}