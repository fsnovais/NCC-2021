import "./intro.scss"

export default function Intro() {
    return (
        <div className="home" id="intro">
            <div className="container">
            <div className='left'>
                <h1>Núcleo de Computação Competitiva</h1>
                <div className="home-info">
                Projeto de fomento em competições de computação do CEUB, que visa fomentar nos alunos da graduação e pós-graduação, a cultura de participação em competições da área de computação.
                </div>
            </div>
            <div className='right'>
                <img src="assets/notebook.png" alt="Notebook" />
            </div>
            </div>
        </div>
    )
}
