import { Route, Router, Routes } from "react-router";
import HelpState from "../pages/HelpState.js";
import LevelSelectState from "../pages/LevelSelectState.js";
import MenuState from "../pages/MenuState.js";
import PlayState from "../pages/PlayState.js";

function GameState() {
    return (
    <div className="rpgui-container framed" style={{width: '70%', height: '84%', overflow: "scroll", margin: "0 auto"}}>
        <Routes>

            <Route path='/' element={<MenuState/>}/>
            <Route path='/help' element={<HelpState/>}/>
            <Route path='/play' element={<PlayState/>}/>
            <Route path='/level-select' element={<LevelSelectState/>}/>

        </Routes>

    </div>
    )
}

export default GameState;