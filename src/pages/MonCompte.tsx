import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function MonCompte() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Redirection si non connecté
    useEffect(() => {
        if (!user) {
            navigate("/connexion");
        }
    }, [user, navigate]);

    if (!user) return <p className="text-center mt-5">Chargement...</p>;

    return (
        <div className="container mt-5">

            {/* HEADER */}
            <div className="bg-dark text-white p-4 rounded shadow-sm text-center mb-4">
                <h1 className="mb-0">Mon Compte</h1>
                <p className="mb-0">Bienvenue {user.prenom} 👋</p>
            </div>

            {/* CARD USER */}
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow-lg p-3">
                        <div className="card-body">

                            <h4 className="card-title mb-3 text-center">
                                🧾 Informations personnelles
                            </h4>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-light">
                                    <strong>Nom :</strong> {user.nom}
                                </li>
                                <li className="list-group-item bg-light">
                                    <strong>Prénom :</strong> {user.prenom}
                                </li>
                                <li className="list-group-item bg-light">
                                    <strong>Email :</strong> {user.email}
                                </li>
                                <li className="list-group-item bg-light">
                                    <strong>Téléphone :</strong> {user.telephone || "Non renseigné"}
                                </li>
                                <li className="list-group-item bg-light">
                                    <strong>Adresse :</strong> {user.adresse || "Non renseignée"}
                                </li>
                            </ul>

                            <div className="text-center mt-4">
                                <button
                                    className="btn btn-warning"
                                    onClick={() => navigate("/modifier-compte")}>
                                    Modifier mes informations ✏️
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
