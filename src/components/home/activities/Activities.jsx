import "./activities.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from "@fortawesome/free-solid-svg-icons";

export default function Activities() {
    return (
        <div className="activities">
            <div className="title">
            <h1>Atividades</h1>
            </div>
            <div className="div1">
            <div className='ActivityContainer'>
                <div className="item">
                    <div className="img">
                    <FontAwesomeIcon className="icon" icon={faCode} size="4x" />
                        
                    </div>
                    <div className="text">
                        Competições de programação regulares entre alunos
                    </div>
                </div>
                <div className="item">
                    <div className="img">
                    <FontAwesomeIcon className="icon" icon={faCode} size="4x" />
                    </div>
                    <div className="text">
                        Aulas sobre tópicos avançados de programação
                    </div>
                </div>
                <div className="item">
                    <div className="img">
                    <FontAwesomeIcon className="icon" icon={faCode} size="4x" />
                    </div>
                    <div className="text">
                        Treinamento regular de resolução de problemas de programação                    </div>
                </div>
                <div className="item down">
                    <div className="img">
                    <FontAwesomeIcon className="icon" icon={faCode} size="4x" />
                    </div>
                    <div className="text">
                        Participação das edições regulares da Maratona de Programação da SBC - Sociedade Brasileira de Computação
                    </div>
                </div>
                <div className="item down">
                    <div className="img">
                    <FontAwesomeIcon className="icon" icon={faCode} size="4x" />
                    </div>
                    <div className="text">
                        Sediar etapa(s) da Maratona de Programação da SBC - Sociedade Brasileira de Computação                    </div>
                </div>
            </div>
            </div>
        </div >
    )
}
