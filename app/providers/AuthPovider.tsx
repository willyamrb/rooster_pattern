import { ReactNode, useEffect, createContext, useState } from "react";

interface IAuthContext {
    isAuthenticated: boolean;
    user: undefined;
    setUser: React.Dispatch<React.SetStateAction<undefined>>;
}

const AuthContext = createContext<IAuthContext>({
    isAuthenticated: false,
    user: undefined,
    setUser: () => {},
});

interface IAuthProviderProps {
    children: ReactNode;
}

function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState();
    const isAuthenticated = !!user;

    useEffect(() => {}, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
