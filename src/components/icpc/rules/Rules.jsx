import "./rules.scss"

export default function Rules() {
    return (
        <div className="rules">
            <div className="title">
                <h1> Regras</h1>
            </div>
            <div className="container">
                <div className="text">
                O ICPC é uma competição em equipa. As regras estipulam que cada equipa seja composta de três estudantes. Os participantes devem ser estudantes universitários, que tenham tido no máximo cinco anos de educação universitária antes da competição ou tenham até 23 anos até o final do ano anterior ao ano da final mundial, ou seja, basta que cada estudante preencha um dos dois requisitos descritos para poder participar. Estudantes que tenham competido em duas Finais Mundiais ou cinco competições regionais não podem participar novamente.<br/><br/>
                Durante a competição, as equipas têm 5 horas para resolver entre 8 e 11 problemas computacionais (com tipicamente 8 problemas para as regionais e 10 para a final mundial). As soluções devem ser submetidas em C, C++ ou Java. Os programas são então testados com casos de teste e, se o programa produzir alguma resposta errada ou não for suficientemente eficiente, ele não é aceite e a equipa é notificada disso.<br/><br/>
                O vencedor é a equipa que resolver mais problemas corretamente. Se necessário, em caso de empate no número de problemas resolvidos, a classificação das equipas é determinada pela soma dos tempos da submissão correta de cada problema mais 20 minutos para cada submissão rejeitada em um problema que acabe sendo resolvido.

            </div>
            </div>
        </div>
    )
}
