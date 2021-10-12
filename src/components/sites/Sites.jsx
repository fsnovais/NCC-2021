import "./sites.scss";
import Footbar from "../footbar/Footbar";
export default function Sites() {
    return (
        <div className="sections">
        <div className="sites" id="sites">
            <h1>Sites de Interesse</h1>
            <div className="div1">
            <div className='ActivityContainer'>
                <a className="item" href="https://olimpiada.ic.unicamp.br/" target="_blank" rel="noreferrer">
                    XXIII Olimpíada Brasileira de Informática
                </a>
                <a className="item" href="https://www.urionlinejudge.com.br/judge/en/login"target="_blank" rel="noreferrer">
                Maratona SBC de Programação
                </a>
                <a className="item" href="http://maratona.sbc.org.br/"target="_blank" rel="noreferrer">
                UVA Online Judge                    
                </a>
                <a className="item" href="https://book.hacktricks.xyz/" target="_blank" rel="noreferrer">
                HackTricks
                </a>
                <a className="item" href="https://www.hackthebox.eu/" target="_blank" rel="noreferrer">
                HackTheBox
                </a>
                <a className="item" href="https://mentebinaria.gitbook.io/engenharia-reversa/" target="_blank" rel="noreferrer">
                Fundamentos de engenharia reversa
                </a>
                <a className="item" href="https://tryhackme.com/" target="_blank" rel="noreferrer">
                Try Hack Me
                </a>
                <a className="item" href="https://overthewire.org/wargames/" target="_blank" rel="noreferrer">
                War Games
                </a>
            </div>
            </div>
            <Footbar/>
        </div>
        </div>
        
    )
}
