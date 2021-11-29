import { useNavigate } from "react-router";
import { getCurrentLevel } from "../Utils/globals";
import { buy, sell } from "../Utils/tezos";

function PlayState() {

    const navigate = useNavigate()

    async function buyHandler() {
        await buy(5)
    }

    async function sellHandler() {
        await sell(5)
    }

    function backHandler() {
        navigate('/level-select')
    }

    return (
        <div align="center">
            <div className="rpgui-container framed-golden-2" style={{ width: "50%" }}>
                <h1>{`Level: ${getCurrentLevel() + 1}`}</h1>
                <div className="rpgui-container framed-grey" style={{ width: "50%", display: "grid" }}>
                    <button style={{ height: 50, margin: 5 }} onClick={async () => { await buyHandler() }}>Buy</button>
                    <button style={{ height: 50, margin: 5 }} onClick={async () => { await sellHandler() }}>Sell</button>
                    <button style={{ height: 50, margin: 5 }} onClick={backHandler}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default PlayState;