import { useState } from "react";

function MenuState() {

    function playHandler() {

    }

    function statsHandler() {

    }

    function helpHandler() {
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