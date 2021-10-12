import "./about.scss"

export default function About() {
    return (
        <div className="about">
            <div className="title">
           <h1> O que é?</h1>
            </div>
            <div className="text">

            O <text style={{fontWeight: "bold"}}>“Núcleo de Computação Competitiva (NCC)”</text> é um projeto de fomento em competições de computação do CEUB, sob curadoria do prof <text style={{fontWeight: "bold"}}>Aderbal Botelho</text>, que visa fomentar nos alunos da graduação e pós-graduação, a cultura de participação em competições da área de computação, fomentando o desenvolvimento técnico, a capacidade de raciocínio lógico, e a colaboração e trabalho em grupo para a resolução de problemas computacionais na programação e segurança da informação.


            </div>
        </div>
    )
}