import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function MonCompte() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();



    return (
        <div>
            <h1>Page MonCompte</h1>
        </div>
        )