import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Logo à gauche */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="/LogoCrousti.png" 
                        alt="Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-text-top"
                    />
                </Link>

                {/* Bouton hamburger pour mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Liens de navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/histoire">Histoire</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/restaurants">Restaurants</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/franchise">Franchise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/moncompte">MonCompte</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
