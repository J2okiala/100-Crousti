import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import type { User } from "../types/User";

export default function ModifCompte() {
    const { user, setUser, token, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // Protection si non connecté
    useEffect(() => {
        if (!user) navigate("/connexion");
    }, [user, navigate]);

    // Toujours mettre les hooks AVANT tout return conditionnel
    const [formData, setFormData] = useState({
        nom: user?.nom || "",
        prenom: user?.prenom || "",
        email: user?.email || "",
        telephone: user?.telephone || "",
        adresse: user?.adresse || "",
    });

    // Maintenant le return conditionnel est placé APRÈS tous les hooks 
    if (!user) return <p className="text-center mt-5">Chargement...</p>;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://localhost:3000/api/utilisateurs/${user.id_utilisateur}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                alert(result.message || "Erreur lors de la mise à jour");
                return;
            }

            // Mise à jour du context
            setUser({ ...user, ...formData } as User);

            alert("Profil mis à jour avec succès !");
            navigate("/mon-compte");

        } catch (error) {
            console.error(error);
            alert("Erreur serveur");
        }
    };

    const handleDeleteAccount = async () => {
        const confirmation = window.confirm(
            "⚠️ Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible."
        );

        if (!confirmation) return;

        try {
            const response = await fetch(
                `http://localhost:3000/api/utilisateurs/${user.id_utilisateur}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            );

            if (!response.ok) {
                alert("Erreur lors de la suppression du compte");
                return;
            }

            alert("Votre compte a été supprimé.");

            // Déconnexion propre
            logout();

            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Erreur serveur");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 col-md-6 mx-auto">

                <h2 className="text-center mb-4">Modifier mes informations ✏️</h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Nom</label>
                        <input
                            type="text"
                            name="nom"
                            className="form-control"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Prénom</label>
                        <input
                            type="text"
                            name="prenom"
                            className="form-control"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Téléphone</label>
                        <input
                            type="text"
                            name="telephone"
                            className="form-control"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Adresse</label>
                        <input
                            type="text"
                            name="adresse"
                            className="form-control"
                            value={formData.adresse}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn btn-dark w-100" type="submit">
                        Enregistrer
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary w-100 mt-3"
                        onClick={() => navigate("/mon-compte")}
                    >
                        Annuler
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger w-100 mt-3"
                        onClick={handleDeleteAccount}
                    >
                        Supprimer mon compte
                    </button>

                </form>

            </div>
        </div>
    );
}
