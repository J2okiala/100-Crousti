import React from "react";

const Footer = () => {
    return (
        <footer className="bg-warning text-white py-4">
        <div className="container">
            <div className="row">
            {/* Logo + Slogan */}
            <div className="col-md-3 mb-4">
                <img
                src="/LogoCrousti.png" 
                alt="Logo"
                width="60"
                className="mb-2"
                />
                <p className="mb-1 fw-bold">100% CROUSTI 100% HUMMM</p>
                <small>
                Pour votre santé, évitez de grignoter entre les repas : <br />
                <a
                    href="https://www.mangerbouger.fr"
                    className="text-white text-decoration-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.mangerbouger.fr
                </a>
                </small>
            </div>

            {/* Liens utiles */}
            <div className="col-md-3 mb-4">
                <h5>Liens utiles</h5>
                <ul className="list-unstyled">
                <li>Histoire</li>
                <li>Carte</li>
                <li>Franchise</li>
                <li>Restaurant</li>
                <li>Nous contacter</li>
                </ul>
            </div>

            {/* Mentions légales */}
            <div className="col-md-3 mb-4">
                <h5>Légales</h5>
                <ul className="list-unstyled">
                <li>Mentions légales</li>
                <li>Conditions générales de ventes</li>
                <li>Politique de cookies</li>
                <li>Politique de confidentialité</li>
                </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 mb-4">
                <h5>Nous contacter</h5>
                <ul className="list-unstyled">
                <li>Tél : 01 23 45 67 89</li>
                <li>1 rue de Paris, 75001</li>
                <li>contact@crousti.com</li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
