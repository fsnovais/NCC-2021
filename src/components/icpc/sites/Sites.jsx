import "./sites.scss";
import Footbar from "../../footbar/Footbar";
export default function Sites() {
    return (
        <div className="sites" id="sites">
            <h1>Sites de Interesse</h1>
            <div className="div1">
            <div className='ActivityContainer'>
                <a className="item" href="https://olimpiada.ic.unicamp.br/" target="_blank">
                    XXIII Olimpíada Brasileira de Informática
                </a>
                <a className="item" href="https://www.urionlinejudge.com.br/judge/en/login"target="_blank">
                Maratona SBC de Programação
                </a>
                <a className="item" href="http://maratona.sbc.org.br/"target="_blank">
                UVA Online Judge                    
                </a>
                <a className="item" href="https://maratona.ic.unicamp.br/MaratonaVerao2020/" target="_blank">
                URI Online Judge
                </a>
            
            </div>
            </div>
            <Footbar/>
        </div>
    )
}
