import { Link } from "react-router-dom";
import { getNetworkPermission } from "../Utils/tezos";

function MainNavBar() {


    return (
        <header>

            <div>TDG</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Menu</Link>
                    </li>

                    <li>
                        <button onClick={ getNetworkPermission}>Connect Wallet</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavBar;