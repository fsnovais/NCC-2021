import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">
                        <div className="imgContainer">
                        <img src="assets/logo.png" alt="logo" />
                        </div>
                    </a>
                </div>
                <div className="right">
                    <a href="#">Home</a>
                    <a href="#">ICPC</a>
                    <a href="#">Sites de interesse</a>
                    <a href="#">Inscreva-se</a>
                </div>
            </div>
        </div>
    )
}
