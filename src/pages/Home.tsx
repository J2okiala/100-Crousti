export default function Home() {
    return (
        <div className="home">

            {/* HERO */}
            <section className="py-5 bg-light text-center">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold">Bienvenue chez 100% Crousti</h1>
                    <p className="lead mt-3 mb-4">
                        La plateforme moderne pour gérer vos commandes, vos clients et vos services.
                    </p>
                    <button className="btn btn-warning  btn-lg">
                        Découvrir
                    </button>
                </div>
            </section>

            {/* À PROPOS */}
            <section className="py-5 bg-white text-center">
                <div className="container">
                    <h2 className="fw-bold mb-3">Pourquoi nous choisir ?</h2>
                    <p className="mx-auto" style={{ maxWidth: "750px" }}>
                        Crousti vous aide à simplifier votre gestion quotidienne avec un tableau de bord clair,
                        des outils performants et une interface intuitive adaptée à tous les métiers de la restauration.
                    </p>
                </div>
            </section>

            {/* AVANTAGES */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5">Nos avantages</h2>

                    <div className="row text-center">

                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm bg-warning h-100">
                                <h4 className="fw-bold">Rapidité</h4>
                                <p className="mt-3">Des processus optimisés pour réduire les temps d’attente.</p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm bg-warning h-100">
                                <h4 className="fw-bold">Sécurité</h4>
                                <p className="mt-3">Données sécurisées grâce aux dernières normes modernes.</p>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="p-4 border rounded shadow-sm bg-warning h-100">
                                <h4 className="fw-bold">Flexibilité</h4>
                                <p className="mt-3">S’adapte à tous types de commerces : restaurant, food-truck, bar…</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* TÉMOIGNAGES */}
            <section className="py-5 bg-white">
                <div className="container text-center">

                    <h2 className="fw-bold mb-5">Ils nous font confiance</h2>

                    <div className="row justify-content-center">

                        <div className="col-md-5 mb-4">
                            <div className="p-4 bg-light border rounded shadow-sm h-100">
                                <p className="fst-italic">
                                    “Grâce à Crousti, nous avons réduit notre temps d’attente de 30 %.”
                                </p>
                                <div className="fw-bold mt-2">Restaurant Le Gourmet</div>
                            </div>
                        </div>

                        <div className="col-md-5 mb-4">
                            <div className="p-4 bg-light border rounded shadow-sm h-100">
                                <p className="fst-italic">
                                    “L’interface est extrêmement intuitive, même pour les nouveaux employés.”
                                </p>
                                <div className="fw-bold mt-2">Bistro Express</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-5 bg-dark text-white text-center">
                <div className="container py-4">
                    <h2 className="fw-bold mb-4">Prêt à commencer ?</h2>
                    <button
                        className="btn btn-warning  btn-lg"
                        onClick={() => (window.location.href = "/inscription")}
                    >
                        Créer un compte
                    </button>
                </div>
            </section>

        </div>
    );
}
