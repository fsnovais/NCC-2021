import "./menu.scss"
import { HashLink as Link } from 'react-router-hash-link';

export default function Menu({menuOpen, setMenuOpen}) {
    return(
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                <Link className="menu-link" to="/#intro">Home</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link className="menu-link" to="/icpc#icpc">ICPC</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link className="menu-link" to="/ctf#ctf">CTF</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <Link className="menu-link" to="/sites">Sites de interesse</Link>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                <a href="https://forms.gle/h6qAFNfrv9ePnENBA" target="_blank" rel="noreferrer"> <button>Inscreva-se</button></a>
                </li>
            </ul>
        </div>
    )
}