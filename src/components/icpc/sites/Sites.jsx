import "./sites.scss";
import Footbar from "../../footbar/Footbar";
export default function Sites() {
    return (
        <div className="sites">
            <h1>Sites de Interesse</h1>
            <div className="div1">
            <div className='ActivityContainer'>
                <a className="item" href="#">XXIII Olimpíada Brasileira de Informática</a>
                <div className="item">

                    <div className="text">
                        Aulas sobre tópicos avançados de programação
                    </div>
                </div>
                <div className="item">
 
                    <div className="text">
                        Treinamento regular de resolução de problemas de programação                    </div>
                </div>
                <div className="item ">

                    <div className="text">
                        Participação das edições regulares da Maratona de Programação da SBC - Sociedade Brasileira de Computação
                    </div>
                </div>
               
            </div>
            </div>
            <Footbar/>
        </div>
    )
}
