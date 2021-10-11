import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {

    return (
        <div className="topbar">
            <div className="wrapper">
            <Link to="/#intro">
                    <img className="logo" src="assets/logo.png" alt="logo" />
                </Link>
                <div className="itemContainer">
                        <Link to="/#intro">Home</Link>
                        <Link to="/icpc#icpc">ICPC</Link>
                        <Link to="/icpc#sites">Sites de interesse</Link>
                </div>
                <a className="cta" href="#" target="_blank"> <button>Inscreva-se</button></a>
                <div className="right">
                    <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
