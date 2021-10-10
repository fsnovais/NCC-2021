import "./footbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Footbar() {
    return (
        <div className="footbar">
            <div className="image">
                <div className="logo">
                    <a href="https://www.uniceub.br/">
                    <img src="assets/logoCEUB2021.png" alt="UniCEUB" />
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/uniceub">
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                    </a>
                    <a href="https://twitter.com/uniceub">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
                    </a>
                    <a href="https://www.linkedin.com/school/uniceub-centro-universitario-de-brasilia/?originalSubdomain=pt">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" color="white"/>
                    </a>
                    <a href="http://instagram.com/uniceub_oficial">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="white"/>
                    </a>
                    <a href="https://www.youtube.com/user/uniceub">
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="white"/>
                    </a>
                </div>
            </div>
            <div className="text">
                <div className="left">
                <span>Central de Atendimento: (61) 3966-1201 - central.atendimento@uniceub.br</span>
                <span>Unidades</span>
                <span>Campus da Asa Norte: SEPN 707/907 - Campus Universitário</span>
                <span>Campus II de Taguatinga: QS 1, Lote 1/17, Rua 214</span>
                <span>Centro de Atendimento à Comunidade: Setor Comercial Sul, Quadra 1 - Edificio União, Brasília-DF</span>
                </div>
                <div className="right">
                    <a href="https://www.ceubos.com.br">CeubOS</a>
                    <a href="https://ctf.ceubos.com.com.br">Competições CTF</a>
                    <a href="https://boca.ceubos.com.br">Treino ICPC</a>
                    <a href="https://ia.ceubos.com.br">Turma IA</a>
                </div>  
            </div>

            </div>
    )
}
