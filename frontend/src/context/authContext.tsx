'use client';

import {createContext, useContext, useEffect, useState} from "react";
import {getSession} from "@/app/_lib/session";

interface AuthContextType {
    isAuthenticated: boolean;
    user: any;
    error: string | null;
    token: string | null;
    setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | any>(undefined);

export function AuthProvider({children}: {
    children: React.ReactNode;
}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    console.log('token from context :', token);
    useEffect(() => {
        const checkAuthBySession = async () => {
            try {
                const session = await getSession();
                if (session && session.userData) {
                    setIsAuthenticated(true);
                    setUser(session.userData);
                    setToken(session.token as string);
                    setError(null);
                } else {
                    setError('Error: session or userData are invalid');
                }
            } catch (error) {
                setError('Erreur: failed to get session');
            }
        };
        checkAuthBySession();
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext);
}