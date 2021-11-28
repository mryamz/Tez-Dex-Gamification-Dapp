import { Link } from "react-router-dom";
import { getNetworkPermission } from "../Utils/tezos";

function MainNavBar() {

    return (
        <header>
            <div className="rpgui-container framed" style={{width: "75%", margin: "0 auto"}}>
                <div className="rpgui-container framed-golden-2" style={{width: "50%", margin: "0 auto"}}>

                    <nav className>
                        <ul align = "center" style={{listStyle: "none", width: "100%"}}>
                            <li style={{display: "inline-block"}}>
                                <p>TDG</p>
                            </li>

                            <li style={{display: "inline-block"}}>
                                <p>Total Score: </p>
                            </li>

                            <li style={{display: "inline-block"}}>
                                <Link to='/'>Menu</Link>
                            </li>

                            <li style={{display: "inline-block"}}>
                                <button onClick={ getNetworkPermission}>Connect Wallet</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default MainNavBar;