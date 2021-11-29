import { useState } from "react";
import { useNavigate } from "react-router";



function MenuState(props) {
    const navigate = useNavigate();

    function playHandler() {
        navigate('level-select')
    }

    function statsHandler() {
        navigate('stats')
    }

    function helpHandler() {
        navigate('help')
    }

    return  (
    <div align="center">
        <div className="rpgui-container framed-golden-2" style={{width: "50%"}}>
            <h1>Tez Dex Gamification</h1>
            <div className="rpgui-container framed-grey" style={{width: "50%", display: "grid"}}>
                <button style={{height: 50, margin: 5}} onClick={playHandler}>Play</button>
                <button style={{height: 50, margin: 5}} onClick={statsHandler}>Stats</button>
                <button style={{height: 50, margin: 5}} onClick={helpHandler}>Help</button>
            </div>
        </div>
    </div>
    )
}

export default MenuState;