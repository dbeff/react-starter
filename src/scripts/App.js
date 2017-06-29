import React, { Component } from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>
                        Welcome to React {this.state.showText}
                    </h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}

export default App;