export default function Histoire() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">

                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-dark text-white text-center py-4">
                            <h2 className="mb-0">Notre Histoire</h2>
                        </div>

                        <img 
                            src="/LogoCrousti.png" 
                            alt="Histoire Crousti Poulet" 
                            className="img-fluid mx-auto d-block mt-4" 
                            style={{ maxWidth: "200px" }}
                        />

                        <div className="card-body p-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                            <p>
                                <strong>1, 2, 3… POULET !</strong><br />
                                Tout a commencé en <strong>2008</strong>, quand deux frères originaires de la région parisienne
                                décident de vendre des poulets sur les marchés dans un food truck.
                                Leur objectif ? Servir du poulet grillé, mariné dans un mélange d'épices
                                qui avait déjà un goût si particulier !
                            </p>

                            <p>
                                Forts de leur succès, les poulets à la recette secrète s’exportent rapidement
                                sous l’enseigne <strong>CROUSTI POULET</strong>.
                                L’offre de poulets grillés à emporter, à prix défiant toute concurrence,
                                fait un carton plein à chaque nouvelle implantation !
                            </p>

                            <p>
                                En <strong>2020</strong>, plus de <strong>20 points de vente</strong> en Île-de-France exploitent
                                la marque et séduisent toujours plus de gourmands.
                            </p>

                            <p>
                                En <strong>2021</strong>, les frères Dhouki créent une nouvelle recette d’épices,
                                unique et révolutionnaire. Ils décident alors de lancer leur réseau
                                de franchise sous une nouvelle enseigne :
                                <strong> 100 % Crousti</strong>.
                            </p>

                            <div className="alert alert-warning mt-4 text-center">
                                <strong>Un concept redoutable de simplicité.</strong>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
