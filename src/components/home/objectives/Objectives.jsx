import "./objectives.scss"

export default function Objectives() {
    return (
        <div className="objectives">
            <div className="inicio">
            <h1>
                Nossos objetivos
            </h1>
            <text>
                Investir na formação e desenvolvimento de talentos para participar de competições de programação e computação, contribuindo para melhor qualificá-los para o mercado de trabalho de alta tecnologia, assim como aumentar a visibilidade do UniCEUB em tais competições.
            </text>
            </div>

            <div className='GridIdeia'>
                <div className="item">
                   <div className="img">
                   <img src="assets/lampada.png" alt="Lâmpada" />
                   </div>
                    <div className="text">
                    <text>
                        Promover a troca de experiências acadêmicas, por meio da interação dos nossos alunos com alunos de outras universidades, como resultado das participações nas competições nacionais e internacionais.
                    </text>
                    </div>
                </div>
                <div className="item">
                    <div className="img">
                    <img src="assets/lampada.png" alt="Lâmpada" />
                    </div>
                    <div className="text">
                    <text>
                        Formar recursos humanos qualificados e experientes em técnicas avançadas de programação, incluindo tópicos não cobertos pelo currículo básico dos cursos de computação.
                    </text>
                    </div>
                </div>
                <div className="item">
                    <div className="img">
                    <img src="assets/lampada.png" alt="Lâmpada" />
                    </div>
                    <div className="text">
                    <text>
                        Melhorar a visibilidade do UniCEUB em competições de programação de alto nível, reforçando assim o compromisso de busca pela excelência no ensino da instituição.
                    </text>
                    </div>
                </div>
                <div className="item">
                    <div className="img">
                    <img src="assets/lampada.png" alt="Lâmpada" />
                    </div>
                    <div className="text">
                    <text>
                        Fomentar a participação dos alunos em competições de programação de alto nível, nacionais e internacionais, como um recurso de formação complementar para desenvolver habilidades de raciocínio lógico, colaboração e trabalho em equipe, e desenvolvimento de soluções dentro de prazos bem definidos.
                    </text>
                    </div>
                </div>
            </div>
        </div>
    )
}
