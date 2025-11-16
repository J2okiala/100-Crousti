import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    // 🧠 États pour les champs du formulaire
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [message, setMessage] = useState("");

    // 📡 Fonction appelée lors du clic sur "Soumettre"
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // empêche le rechargement de la page

        try {
            const response = await fetch("http://localhost:3000/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, mot_de_passe: motDePasse }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(`✅ Connexion réussie : ${data.message || "Bienvenue !"}`);
                // setter les valeur token et user
                login(data.token, { email })
                // changement de page
                navigate('/');
                //   localStorage.setItem('token', data.token)
            } else {
                setMessage("❌ Échec de la connexion. Vérifie ton email ou mot de passe.");
            }
        } catch (error) {
            console.error("Erreur de connexion :", error);
            setMessage("⚠️ Erreur de communication avec le serveur.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // ✅ met à jour le state
                            required
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Mot de passe
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)} // ✅ met à jour le state
                            required
                        />
                    </div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Soumettre
                    </button>
                </div>
            </form>

            {/* Affichage du message de retour */}
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}