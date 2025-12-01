import { Link, Routes, Route } from "react-router";
import Instructions from "./Instructions";

function Footer() {
    return (
        <footer className="footer">
            <nav>
               
                <ul className="footer__list">
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="#/">A jugar</a>
                    </li>
                    <li className="footer__menu-item">
                        <Link className="footer__menu-link active" to="/instructions"
                        >¿Cómo se juega?</Link>
                    </li>
                    <li className="footer__menu-item">
                        <a className="footer__menu-link" href="#/options">Más opciones</a>
                    </li>
                </ul>
            </nav>
            <small className="footer__copy">© Adalab</small>
        </footer>

    );
}

export default Footer;