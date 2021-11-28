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
    <div>
        <h1>Tez Dex Gamification</h1>
        <button onClick={playHandler}>Play</button>
        <button onClick={statsHandler}>Stats</button>
        <button onClick={helpHandler}>Help</button>
    </div>
    )
}

export default MenuState;