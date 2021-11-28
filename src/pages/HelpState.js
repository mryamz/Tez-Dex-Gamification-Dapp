import { useState } from "react";
import { useNavigate } from "react-router";

function HelpState() {
    const navigate = useNavigate();

    function backHandler() {
        navigate('/')
    }

    return (

        <div align="center">
            <div className="rpgui-container framed-golden-2" style={{ width: "60%" }}>
                <h1>TezDex Gamification (TDG): Manual</h1>
                <div className="rpgui-container framed-grey" style={{ width: "95%", display: "grid" }}>
                    <p align="left">The goal of the game is to perform tezos defi tasks.</p>
                    <p align="left">Currently, you may only buy and sell FA12 tokens. You will earn two forms of score depeding on the following scoring rules:</p>
                    <h1>Scoring Rules</h1>
                    <p align="left">A player can do two things in a level: buy or sell. For each tez you give away when buying, you are given 1 ScoreFA12 and 1 Score + the token you exchanged tez for.</p>
                    <p align="left">Once a user buys a token, they are allowed to sell. The score you earn by selling is equal to your (profit + 1) * multiplier</p>
                    <h1>Multiplier</h1>
                    <p align="left">The multiplier is set according to how many days in a row you have played times your rank.</p>

                    <h1>Scoring Types</h1>
                    <p align="left">Type 1: ScoreFA12, when being awarded score, you are given score tokens. These tokens may be exchanged for tezos and are used to incentivize you to play the game well</p>
                    <p align="left">Type 2: Regular Score, this is an on-chain variable that represents all the score you have collected for a level</p>
                    <p align="left">Type 3: Total Score, this is all the score you have ever gotten.</p>
                    <h1>Future Development</h1>
                    <p align="left">Add support for other defi use cases such as: arbitrage, kolbri, youves, etc...</p>

                    <button style={{ height: 50, margin: 5 }} onClick={backHandler}>Back to Menu</button>
                </div>
            </div>
        </div>
    )
}

export default HelpState;