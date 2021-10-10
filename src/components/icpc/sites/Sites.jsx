import "./sites.scss";
import Footbar from "../../footbar/Footbar";
export default function Sites() {
    return (
        <div className="sites" id="sites">
            <h1>Sites de Interesse</h1>
            <div className="div1">
            <div className='ActivityContainer'>
                <a className="item" href="#">
                    XXIII Olimpíada Brasileira de Informática
                </a>
                <a className="item" href="#">
                Aulas sobre tópicos avançados de programação
                </a>
                <a className="item" href="#">
                Treinamento regular de resolução de problemas de programação                    
                </a>
                <a className="item" href="#">
                Participação das edições regulares da Maratona de Programação da SBC - Sociedade Brasileira de Computação
                </a>
            
            </div>
            </div>
            <Footbar/>
        </div>
    )
}
