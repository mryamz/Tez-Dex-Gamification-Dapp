import { Link, useNavigate } from "react-router-dom";
import { getNetworkPermission } from "../Utils/tezos";

function MainNavBar() {
    const navigate = useNavigate();

    function menuHandler() {
        navigate('/')
    }

    return (
        <header>
            <div className="rpgui-container framed" style={{width: "80%", margin: "0 auto"}}>
                <div className="rpgui-container framed-golden-2" style={{width: "70%", margin: "0 auto"}}>

                    <nav className>
                        <ul align = "center" style={{
                             display: "flex",
                             justifyContent: "space-between",
                             width: "100%",
                             margin: 0,
                             padding: 0,
                            }}>
                            <li onClick={menuHandler} style={{display: "inline-flex"}}>
                                <p>TDG</p>
                            </li>

                            <li style={{display: "inline-flex"}}>
                                <p>Total Score: </p>
                            </li>

                            <li style={{display: "inline-flex"}}>
                                <p>Streak: </p>
                            </li>

                            <li style={{display: "inline-flex"}}>
                                <p>Rank: </p>
                            </li>


                            <li style={{display: "inline-flex"}}>

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