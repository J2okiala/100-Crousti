import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../types/User";


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    //Quand un token existe : on va chercher le profil du user
    useEffect(() => {
        if (!token) return;

        const fetchProfil = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/utilisateurs/profil", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (res.ok) {
                    const data: User = await res.json();
                    setUser(data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Erreur lors du chargement du profil :", error);
                setUser(null);
            }
        };

        fetchProfil();
    }, [token]);

    //Enregistrer token + user après connexion
    const login = (token: string, userData: User) => {
        localStorage.setItem("token", token);
        setToken(token);
        setUser(userData);
    };

    //Déconnexion
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
