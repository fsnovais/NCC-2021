import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
            <a href="#intro">
                        <img className="logo" src="assets/logo.png" alt="logo" />
                    </a>

                    <div className="itemContainer">
                        <a href="#">Home</a>
                        <a href="#">ICPC</a>
                        <a href="#">Sites de interesse</a>
                    </div>
                <a className="cta" href="#"><button>Inscreva-se</button></a>
            </div>
        </div>
    )
}
