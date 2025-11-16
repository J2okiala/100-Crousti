const menus = [
    { title: "MENU PILONS", description: "3 pilons de poulet + 1 accompagnement + 1 boisson 33 cl", img: "/FORMULE PILON.jpg" },
    { title: "MENU AILES", description: "4 ailes de poulet + 1 accompagnement + 1 boisson 33 cl", img: "/public/FORMULE AILE.jpg" },
    { title: "MENU ESCALOPE", description: "1 escalope + 1 accompagnement + 1 boisson 33 cl", img: "/public/FORMULE ESCALOPE.jpg" },
    { title: "MENU DONUTS", description: "1 donut + 1 accompagnement + 1 boisson 33 cl", img: "/public/FORMULE DONUTS.jpg" },
    { title: "MENU SAUCISSE", description: "2 saucisses + 1 accompagnement + 1 boisson 33 cl", img: "/public/FORMULE SAUCISSE.jpg" },
    { title: "MENU BRICK", description: "1 brick + 1 accompagnement + 1 boisson 33 cl", img: "/public/FORMULE BRICK.jpg" },
    { title: "MENU FAMILIAL", description: "4 demi‑poulet + 4 accompagnements + 1 bouteille 1,5 l", img: "/public/FORMULE FAMILY.jpg" },
];

const produits = [
    { name: "Poulet", img: "/public/CUISSE DE POULET.jpg" },
    { name: "Demi Poulet", img: "/public/DEMI POULET.jpg" },
    { name: "Escalope", img: "/public/ESCALOPE DE POULET.jpg" },
    { name: "3 Pilons", img: "/public/3 PILON DE POULET.jpg" },
    { name: "4 Ailes", img: "/public/4 AILE DE POULET.jpg" },
    { name: "Cuisse", img: "/public/CUISSE DE POULET.jpg" },
    { name: "3 Tenders", img: "/public/3 TENDERS.jpg" },
    { name: "Brick", img: "/public/BRICK.jpg" },
    { name: "Donut", img: "/public/DONUTS.jpg" },
    { name: "Saucisse", img: "/public/SAUCISSE.jpg" },
    { name: "Sandwich", img: "/public/SANDWICH.jpg" },
];


export default function Menu() {
    return (
        <div>

            {/* 🎉 Hero section */}
            <div
                className="text-white text-center py-5 mb-5"
                style={{
                    background: "url('/public/CUISSE DE POULET.jpg') center/cover no-repeat",
                    backgroundAttachment: "fixed",
                    boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.6)"
                }}
            >
                <h1 className="display-4 fw-bold">Découvrez Nos Menus</h1>
                <p className="lead">Des recettes gourmandes, marines et grillées à la perfection 🔥</p>
            </div>

            <div className="container">

                {/* ⭐ Titres stylisés */}
                <h2 className="text-center mb-4 fw-bold text-warning">
                    🥘 Nos Formules
                </h2>

                <div className="row gy-5">
                    {menus.map((menu, idx) => (
                        <div key={idx} className="col-12 col-md-6 col-lg-4">
                            <div
                                className="card shadow-lg border-0 h-100"
                                style={{ borderRadius: "20px", overflow: "hidden" }}
                            >
                                <div className="position-relative">
                                    <img
                                        src={menu.img}
                                        className="card-img-top"
                                        alt={menu.title}
                                        style={{
                                            height: "220px",
                                            objectFit: "cover",
                                            transition: "0.3s",
                                        }}
                                    />
                                    <span
                                        className="badge bg-warning text-dark position-absolute top-0 end-0 m-2"
                                        style={{ fontSize: "0.9rem" }}
                                    >
                                        Populaire ⭐
                                    </span>
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{menu.title}</h5>
                                    <p className="card-text flex-grow-1">{menu.description}</p>

                                    <button className="btn btn-warning rounded-pill fw-bold mt-3">
                                        Commander
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🥩 Produits */}
                <h2 className="text-center mt-5 fw-bold text-warning">
                    🍗 Nos Produits
                </h2>

                <div className="row mt-4 g-4">
                    {produits.map((item, i) => (
                        <div key={i} className="col-6 col-md-4 col-lg-2">
                            <div
                                className="card text-center shadow-sm border-0"
                                style={{
                                    borderRadius: "15px",
                                    transition: "0.2s",
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="card-img-top"
                                    style={{
                                        height: "120px",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "15px",
                                        borderTopRightRadius: "15px",
                                    }}
                                />
                                <div className="card-body p-2">
                                    <h6 className="card-title text-uppercase fw-bold mb-0">
                                        {item.name}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
