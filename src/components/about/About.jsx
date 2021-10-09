import "./about.scss"

export default function About() {
    return (
        <div className="about">
            <h4>
                O que é?
            </h4>
            <div className='paragrafo'>
                <text>
                    O  <text style={{ fontWeight: "bold" }}>“Núcleo de Computação Competitiva (NCC)”</text> é um projeto da seleção de programação competitiva do <text style={{ fontWeight: "bold" }}>UniCEUB</text>,<br /> sob curadoria do prof Aderbal Botelho, que visa fomentar nos alunos da graduação e <br />pós-graduação, a cultura de participação em competições de programação, fomentando o <br />desenvolvimento técnico, a capacidade de raciocínio lógico, e a colaboração e trabalho em grupo <br />para a resolução de problemas computacionais.
                </text>
            </div>
        </div>
    )
}
