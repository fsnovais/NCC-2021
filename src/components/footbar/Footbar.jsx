import "./footbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Footbar() {
    return (
        <div className="footbar">
            <div className="image">
                <div className="logo">
                <a href="https://ncc.ceubos.com.br/">
                        <img src="assets/LogoNCC2021.png" alt="NCC" />
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/prof.aderbal">
                        <FontAwesomeIcon className="social-icon" icon={faFacebook} color="white" />
                    </a>
                    <a href="https://twitter.com/aderbalbotelho">
                        <FontAwesomeIcon className="social-icon" icon={faTwitter} color="white" />
                    </a>
                    <a href="https://www.linkedin.com/in/aderbalbotelho/">
                        <FontAwesomeIcon className="social-icon" icon={faLinkedin} color="white" />
                    </a>
                    <a href="https://www.instagram.com/aderbalbotelho/">
                        <FontAwesomeIcon className="social-icon" icon={faInstagram} color="white" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCmH7uiBtICUMmAKUG1ipt6Q">
                        <FontAwesomeIcon className="social-icon" icon={faYoutube} color="white" />
                    </a>
                </div>
            </div>
            <div className="text">
            <div className="left">
                    <span>Contato: (61) 98210-4404</span>
                    <span>Email: aderbal.neto@ceub.edu.br</span>
                </div>
                <div className="right">
                    <a href="https://www.ceubos.com.br" target="_blank" rel="noopener noreferrer">CeubOS</a>
                    <a href="https://ctf.ceubos.com.br" target="_blank" rel="noopener noreferrer">Competições CTF</a>
                    <a href="https://boca.ceubos.com.br/boca" target="_blank" rel="noopener noreferrer">Treino ICPC</a>
                    <a href="https://ia.ceubos.com.br" target="_blank" rel="noopener noreferrer">Turma IA</a>
                    <a href="https://jenkins.ceubos.com.br/" target="_blank" rel="noopener noreferrer">Automatizador de processos</a>
                    <a href="https://koop.ceubos.com.br/" target="_blank" rel="noopener noreferrer">Projetos colaborativos</a>
                    <a href="https://jupyter.ceubos.com.br/" target="_blank" rel="noopener noreferrer">Jupyter Notebook</a>
                </div>
            </div>
            <div className="developed">
            Desenvolvido com ❤ por &nbsp;<a href="https://github.com/phellippe" target="_blank" rel="noopener noreferrer">Felipe Novais</a> &nbsp;e&nbsp; <a href="https://github.com/LanCaroline" target="_blank" rel="noopener noreferrer"> Lana Caroline</a>
            </div>
        </div>
    )
}
