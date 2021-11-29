import { useNavigate } from "react-router"
import { setCurrentLevel } from "../Utils/globals"

function LevelSelectState() {
    const navigate = useNavigate()

    function playLevel1() {
        setCurrentLevel(0)
        navigate('/play')
    }

    return (
        <div align="center">
            <div className="rpgui-container framed-golden-2" style={{ width: "50%" }}>
                <h1>Tez Dex Gamification</h1>
                <div className="rpgui-container framed-grey" style={{ width: "50%", display: "grid" }}>
                    <button style={{ height: 50, margin: 5 }} onClick={playLevel1}>Level 1</button>
                    <button style={{ height: 50, margin: 5 }} disabled='true'>Locked</button>
                    <button style={{ height: 50, margin: 5 }} disabled='true'>Locked</button>
                    <button style={{ height: 50, margin: 5 }} disabled='true'>Locked</button>
                </div>
            </div>
        </div>
    )
}

export default LevelSelectState