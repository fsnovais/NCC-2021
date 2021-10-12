import "./modalities.scss"

export default function Modalities() {
    return (
        <div className="modalities">
            <div className="title">
                <h1> Modalidades</h1>
            </div>
            <div className="container">
                <div className="text">
                <div className="name">
                Binário - engenharia reversa ou exploração de um arquivo binário.
                </div>
                <div className="description">
                A exploração binária se resume a fazer com que um aplicativo aja de maneira diferente da que ele deveria executar. Ao fazer o aplicativo funcionar de maneira diferente, você obtém informações valiosas que serão usadas para alterar ou comandar o destino.
                </div>
                <div className="name">
                Web - Explorando páginas da Web para encontrar a bandeira.
                </div>
                <div className="description">
                Esses tipos abrangem uma ampla variedade de métodos diferentes para explorar recursos baseados na Web. Embora os métodos sejam amplos, existem ferramentas comumente associadas à exploração na Web, incluindo Nmap, Wireshark e Metasploit .
                </div>
                <div className="name">
                Criptografia - Normalmente envolve descriptografar ou criptografar uma parte dos dados.
                </div>
                <div className="description">
                Esse tipo é baseado em conversões de string de um formato para outro. Precisa-se criptografar ou descriptografar mensagens.
                </div>
                <div className="name">
                Esteganografia - encarregada de encontrar informações ocultas em arquivos ou imagens.
                </div>
                <div className="description">
                É a técnica de ocultar uma mensagem dentro de outra. Diferentemente da criptografia, onde torna-se a mensagem ilegível, a esteganografia procura esconder o fato de que a mensagem existe em primeiro lugar.
                </div>
                <div className="name">
                Forensics - Voltados a recuperação de dados, análise forense seja de memória, de rede.
                </div>
                <div className="description">
                Esse tipo em um ambiente CTF pode cobrir muito terreno, mas é bastante comum que seja solicitado  encontrar arquivos ou informações ocultas em outros tipos de arquivos.
                </div>
                <div className="name">
                Engenharia Reversa
                </div>
                <div className="description">
                É o processo de descobrir os princípios tecnológicos e o funcionamento do sistema, através da análise de sua estrutura, função e operação.
                </div>
                <div className="name">
                PPC - (Professional Programming and Coding)
                </div>
                <div className="description">
                São desafios de programação, onde você vai se deparar com desafios em que há um código (de qualquer linguagem possível).
                </div>
            </div>
            </div>
        </div>
    )
}
