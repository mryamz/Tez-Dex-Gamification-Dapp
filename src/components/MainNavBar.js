import { Link } from "react-router-dom";
import { getNetworkPermission } from "../Utils/tezos";

function MainNavBar() {

    return (
        <header>
            <div className="rpgui-container framed">
                <nav className>
                    <ul>
                        <li>
                            <p>TDG</p>
                        </li>

                        <li>
                            <p>Total Score: </p>
                        </li>

                        <li>
                            <Link to='/'>Menu</Link>
                        </li>

                        <li>
                            <button onClick={ getNetworkPermission}>Connect Wallet</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainNavBar;