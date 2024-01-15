import { ReactNode, useEffect, createContext } from "react";

const AuthContext = createContext({});

interface IAuthProviderProps {
    children: ReactNode;
}

function AuthProvider({ children }: IAuthProviderProps) {
    useEffect(() => {}, []);

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
