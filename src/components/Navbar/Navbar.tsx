import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Accueil</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
    )
}

export default Navbar