export default function Franchise() {
    return (
        <div className="container py-5">

            {/* ---- SECTION TEXTE + IMAGE ---- */}
            <div className="row align-items-center mb-5">

                {/* Texte à gauche */}
                <div className="col-md-6">
                    <h1 className="fw-bold text-warning mb-4">
                        Comment devenir franchisé ?
                    </h1>

                    <p className="fs-5">
                        Suite au lancement de la franchise <strong>CROUSTI</strong>,
                        notre équipe développement a reçu énormément de demandes.
                        Nous étudions chaque dossier avec attention et respect.
                    </p>

                    <p className="fs-5">
                        Les premiers franchisés arrivent et nous en sommes très fiers.
                        Nous avons temporairement mis en pause les nouvelles demandes.
                    </p>

                    <p className="fs-5">
                        Une seconde phase d’ouverture arrive très prochainement.
                        Laissez-nous vos coordonnées ci-dessous pour être informé(e)
                        en avant-première !
                    </p>
                </div>

                {/* Image à droite */}
                <div className="col-md-6 text-center">
                    <img
                        src="/public/crousti-franchise.jpg"
                        alt="Franchise"
                        className="img-fluid shadow rounded"
                        style={{ maxHeight: "380px", objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* ---- FORMULAIRE ---- */}
            <div className="bg-light p-4 rounded shadow">
                <h2 className="text-center fw-bold mb-4">Soyez informé(e) du prochain lancement</h2>

                <form className="row g-4">

                    <div className="col-md-6">
                        <label className="form-label">Nom *</label>
                        <input type="text" className="form-control" placeholder="Votre nom" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Prénom *</label>
                        <input type="text" className="form-control" placeholder="Votre prénom" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email *</label>
                        <input type="email" className="form-control" placeholder="exemple@mail.com" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Téléphone *</label>
                        <input type="text" className="form-control" placeholder="06 00 00 00 00" />
                    </div>

                    <div className="col-12">
                        <label className="form-label">Message (optionnel)</label>
                        <textarea className="form-control" rows="4" placeholder="Votre message..."></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-warning btn-lg px-5 fw-bold">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
