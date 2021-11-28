import { useState } from "react";
import { useNavigate } from "react-router";



function MenuState(props) {
    const navigate = useNavigate();

    function playHandler() {

    }

    function statsHandler() {

    }

    function helpHandler() {
        navigate('help')
    }

    return  (
    <div align="center">
        <h1>Tez Dex Gamification</h1>
        <div className="rpgui-container framed" style={{width: 300, display: "grid"}}>
            <button onClick={playHandler}>Play</button>
            <button onClick={statsHandler}>Stats</button>
            <button onClick={helpHandler}>Help</button>
        </div>
    </div>
    )
}

export default MenuState;