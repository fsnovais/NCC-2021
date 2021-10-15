import "./preparing.scss"

export default function Preparing() {
    return (
        <div className="preparing">
            <div className="title">
                <h1> Me interessei! Como participo?</h1>
            </div>
            <div className="container">
                <div className="text">
                    A seleção para  para participar de um dos times aptos a participar  tanto dos eventos de programação competitiva como das competições de segurança da informação podem ser realizadas através do formulário clicando em inscreva-se. após isso, você receberá um email com instruções para acesso às plataformas de treinamento e seleção, Boca (programação competitiva ou CTFd (segurança da informação).
            </div>
                <div className="buttons">
                    <a href="https://boca.ceubos.com.br/boca" target="_blank" rel="noreferrer">
                        <button>Plataforma BOCA</button>
                    </a>
                    <a href="https://forms.gle/h6qAFNfrv9ePnENBA" target="_blank" rel="noreferrer">
                        <button>Inscreva-se</button>
                    </a>
                    <a href="https://ctf.ceubos.com.br" target="_blank" rel="noreferrer">
                        <button>Plataforma CTFD</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
