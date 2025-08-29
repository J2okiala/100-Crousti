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
        <div className="container py-5">
            <h1 className="text-center mb-4">Nos Menus</h1>
            <div className="row gy-4">
                {menus.map((menu, idx) => (
                <div key={idx} className="col-12 col-md-6">
                    <div className="card h-100">
                    <img src={menu.img} className="card-img-top" alt={menu.title} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{menu.title}</h5>
                        <p className="card-text flex-grow-1">{menu.description}</p>
                        <button className="btn btn-warning mt-3">Commander</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            {/* Section "Nos Produits" */}
            <div className="mt-5">
                <h2 className="text-center">Nos Produits</h2>
                <div className="row mt-4 g-4">
                    {produits.map((item, i) => (
                    <div key={i} className="col-6 col-md-4 col-lg-2">
                        <div className="card h-100 text-center">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="card-img-top"
                                style={{ height: "100px", objectFit: "cover" }}
                            />
                            <div className="card-body p-2">
                                <h6 className="card-title text-uppercase mb-0">{item.name}</h6>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
