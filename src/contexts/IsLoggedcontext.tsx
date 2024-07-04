import { ReactNode, createContext, useState } from "react";

type IsLoggedCtxType = {
    islogged: boolean;
    setIsLogged: (logged: boolean) => void;
}
export const IsLoggedCtx = createContext<IsLoggedCtxType | null>(null);

type Props = { children: ReactNode }
export const IsLoggedCtxProvider = ({children}: Props) => {
    const [islogged, setIsLogged] = useState(false);

    return (
        <IsLoggedCtx.Provider value={{ islogged, setIsLogged }}>
            {children}
        </IsLoggedCtx.Provider>
    )
}