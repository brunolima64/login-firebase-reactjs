import { ReactNode, createContext, useState } from "react";

type userLoggedType = {
    userOn: any;
    setUserOn: (user: any)=>void; 
}
export const UserLogged = createContext<userLoggedType | null>(null);

type Props = { children: ReactNode }
export const UserLoggedProvider = ({children}: Props) => {
    const [userOn, setUserOn] = useState();

    return (
        <UserLogged.Provider value={ { userOn, setUserOn } }>
            {children}
        </UserLogged.Provider>
    )
}