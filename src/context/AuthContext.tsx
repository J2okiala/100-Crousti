import { createContext } from "react";
import type { User } from "../types/User";


interface AuthContextType {
    user: User | null; 
    token: string | null;
    login: (token: string, userData: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>; // ajout pour pouvoir modifer un utilisateur
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
    token: null,
    login: () => {},
    logout: () => {},
    isAuthenticated: false,
});
