import { Route, Router, Routes } from "react-router";
import HelpState from "../pages/HelpState.js";
import MenuState from "../pages/MenuState.js";

function GameState() {
    return (
    <div className="rpgui-container framed">
        <Routes>

            <Route path='/' element={<MenuState/>}/>
            <Route path='/help' element={<HelpState/>}/>

        </Routes>

    </div>
    )
}

export default GameState;