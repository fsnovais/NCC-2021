import "./preparing.scss"

export default function Preparing() {
    return (
        <div className="preparing">
            <div className="title">
                <h1> Me interessei! Como participo?</h1>
            </div>
            <div className="container">
                <div className="text">
                    A seleção para  a  XXV Maratona de Programação da SBC, evento promovido pela SBC (Sociedade Brasileira de Computação) que é fase classificatória obrigatória para a ICPC GLOBAL acontecerá de forma online dia 28 de outubro de 2020 às 15:00 horário de Brasília, objetivando formar ao menos um time com três participantes do UniCEUB. Dependendo do desempenho dos alunos, mais de uma equipe (até o limite de 5) poderão ser formadas. Para acompanhar um guia de referência para se preparar acesse:
            </div>
                <div className="buttons">
                    <a href="https://forms.gle/h6qAFNfrv9ePnENBA" target="_blank" rel="noreferrer">
                        <button>Seletiva para a Maratona</button>
                    </a>
                    <a href="https://dev.educatux.com.br/uniceub/competitiva" target="_blank" rel="noreferrer">
                        <button>Desafios Propostos</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
