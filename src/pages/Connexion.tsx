import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, mot_de_passe: motDePasse }),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.token, data.user);
                navigate("/");
            } else {
                setMessage("❌ Email ou mot de passe incorrect.");
            }
        } catch (err) {
            setMessage("⚠️ Erreur de communication avec le serveur.");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #eef2f7, #e5edf4)",
            }}
        >
            <div className="card shadow-lg p-4" style={{ width: "420px", borderRadius: "18px" }}>
                <h2 className="text-center mb-4 fw-bold text-black">Connexion</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            className="form-control rounded-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Mot de passe</label>
                        <input
                            type="password"
                            className="form-control rounded-3"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn btn-dark w-100 rounded-3 py-2 fw-bold">
                        Se connecter
                    </button>
                </form>

                {message && <p className="mt-3 text-center">{message}</p>}
            </div>
        </div>
    );
}
