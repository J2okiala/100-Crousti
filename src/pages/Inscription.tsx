import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
    const navigate = useNavigate();

    // États pour les champs du formulaire
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [message, setMessage] = useState("");

    // Fonction appelée lors du clic sur "Soumettre"
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/utilisateurs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    nom, 
                    prenom, 
                    email, 
                    mot_de_passe: motDePasse, 
                    telephone, 
                    adresse 
                }),
            });

            // 🔍 DEBUG : Afficher le statut et le contenu brut
            console.log("Status:", response.status);
            const textResponse = await response.text();
            console.log("Response brute:", textResponse);

            if (response.ok) {
                const data = JSON.parse(textResponse); // ✅ On utilise data maintenant
                console.log("Données reçues:", data);
                setMessage("✅ Inscription réussie !");
                setTimeout(() => navigate("/connexion"), 1500);
            } else {
                try {
                    const errorData = JSON.parse(textResponse);
                    setMessage(`❌ Erreur : ${errorData.message || "Impossible de créer l'utilisateur."}`);
                } catch {
                    setMessage(`❌ Erreur ${response.status}: ${textResponse}`);
                }
            }
        } catch (err) {
            console.error("Erreur d'inscription :", err);
            setMessage("⚠️ Erreur de communication avec le serveur.");
        }
    };

    return (
        <div className="container mt-5">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label>Nom</label>
            <input type="text" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} required />
            </div>
            <div className="mb-3">
            <label>Prénom</label>
            <input type="text" className="form-control" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
            </div>
            <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
            <label>Mot de passe</label>
            <input type="password" className="form-control" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />
            </div>
            <div className="mb-3">
            <label>Téléphone</label>
            <input type="text" className="form-control" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div className="mb-3">
            <label>Adresse</label>
            <input type="text" className="form-control" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
            </div>
            <button className="btn btn-primary" type="submit">S'inscrire</button>
        </form>
        {message && <p className="mt-3">{message}</p>}
        </div>
    );
}
