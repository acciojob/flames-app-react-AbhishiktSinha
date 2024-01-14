import React, {Component, useState} from "react";
import '../styles/App.css';
import Game from "./Game";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <Game></Game>
            </div>
        )
    }
}


export default App;
