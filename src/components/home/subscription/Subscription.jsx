import "./subscription.scss"
import Footbar from "../../footbar/Footbar"

export default function Subscription() {
    return (
        <div className="subscription">
             <div className="title">
                <h1> Seleção de Alunos</h1>
            </div>
            <div className="container">
                <div className="text">
                Através de exame que será realizado até o dia 29 de outubro de 2020, das 15:00 às 16:00 via Atividade Postada através do Forms. Todos os alunos porão participar e terão 1 hora para responder todas as questões. Os primeiros 10 colocados farão parte do time oficial do UniCEUB. Atividades entregas com atraso não serão consideradas. 
                <br/><br/>
                Até o dia 25 de outubro de 2020 às 00:00. Inscrições fora do prazo serão desconsideradas.

            </div>
                <div className="buttons">
                    <a href="https://forms.gle/h6qAFNfrv9ePnENBA">
                        <button>Inscreva-se</button>
                    </a>

                </div>
            </div>
            <Footbar/>
        </div>
    )
}
