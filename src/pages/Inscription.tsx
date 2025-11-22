import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Inscription() {
    const navigate = useNavigate();

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
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
                    adresse,
                }),
            });

            const text = await response.text();

            if (response.ok) {
                setMessage("✅ Inscription réussie !");
                setTimeout(() => navigate("/connexion"), 1500);
            } else {
                const err = JSON.parse(text);
                setMessage(`❌ Erreur : ${err.message}`);
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
                background: "linear-gradient(135deg, #f8fafc, #e8eaef)",
            }}
        >
            <div className="card shadow-lg p-4" style={{ width: "450px", borderRadius: "18px" }}>
                <h2 className="text-center mb-4 fw-bold text-black">Créer un compte</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Nom</label>
                        <input
                            type="text"
                            className="form-control rounded-3"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Prénom</label>
                        <input
                            type="text"
                            className="form-control rounded-3"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            required
                        />
                    </div>

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

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Téléphone</label>
                        <input
                            type="text"
                            className="form-control rounded-3"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Adresse</label>
                        <input
                            type="text"
                            className="form-control rounded-3"
                            value={adresse}
                            onChange={(e) => setAdresse(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-dark w-100 rounded-3 py-2 fw-bold">
                        S'inscrire
                    </button>
                </form>

                {message && <p className="mt-3 text-center">{message}</p>}
            </div>
        </div>
    );
}
