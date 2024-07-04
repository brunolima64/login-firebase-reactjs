import { ReactNode, createContext, useState } from "react";
import { UserType } from "../types/UserType";
import { dataUsers } from "../data/dataUsers";

type SignInContextType = {
    user: UserType[];
    setUser: (user: any) => void;
}

export const SignInContext = createContext<SignInContextType | null>(null);

type Props = { children: ReactNode; }
export const SignInContextProvider = ({children}: Props) => {
    const [user, setUser] = useState(dataUsers);

    return (
        <SignInContext.Provider value={{ user, setUser }}>
            {children}
        </SignInContext.Provider>
    )
}