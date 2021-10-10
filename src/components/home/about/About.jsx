import "./about.scss"

export default function About() {
    return (
        <div className="about">
            <div className="title">
           <h1> O que é?</h1>
            </div>
            <div className="text">

            O <text style={{fontWeight: "bold"}}>“Núcleo de Computação Competitiva (NCC)”</text> é um projeto da seleção de programação competitiva do <text style={{fontWeight: "bold"}}>UniCEUB</text>, sob curadoria do prof Aderbal Botelho, que visa fomentar nos alunos da graduação e pós-graduação, a cultura de participação em competições de programação, fomentando o desenvolvimento técnico, a capacidade de raciocínio lógico, e a colaboração e trabalho em grupo para a resolução de problemas computacionais.

            </div>
        </div>
    )
}