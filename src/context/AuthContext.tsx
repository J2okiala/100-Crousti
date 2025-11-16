import React, { createContext, useState, useEffect, useContext } from "react";

interface AuthContextType {
    user: any;
    token: string | null;
    login: (token: string, userData: any) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    token: null,
    login: () => { },
    logout: () => { },
    isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            // Ici tu peux appeler ton backend pour récupérer le profil
            // fetch("/api/me", { headers: { Authorization: `Bearer ${token}` } })
            //   .then(r => r.json()).then(setUser);
        }
    }, [token]);

    // set les variable après login succès
    const login = (token: string, userData: any) => {
        localStorage.setItem("token", token);
        setToken(token);
        setUser(userData);
    };

    // unset les variable suite au logout
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};