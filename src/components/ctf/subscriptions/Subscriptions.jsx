import "./subscriptions.scss"
import Footbar from "../../footbar/Footbar";

export default function Subscriptions() {
    return (
        <div className="subscriptions">
            <div className="title">
                <h1> Inscrições</h1>
            </div>
            <div className="container">
                <div className="text">
                Você pode se inscrever no site e começar a resolver problemas para ganhar pontos e subir no ranking.

            </div>
                <div className="buttons">
                    <a href="https://capturetheflag.com.br/" target="_blank" rel="noreferrer">
                        <button>Acessar</button>
                    </a>

                </div>
            </div>
            <Footbar/>
        </div>
    )
}
