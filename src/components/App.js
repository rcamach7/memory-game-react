import "../styles/App.css";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore: 0,
            highScore: 0,
        }
    }

    render() {
        return (
            <div className="App">
                <WebsiteTitle/>
                <Scoreboard currentScore={this.state.currentScore} highScore={this.state.currentScore}/>
            </div>
        );
    }
}

const WebsiteTitle = () => {
    return (
        <div className="WebsiteTitle">
            <h1>Welcome To Ricardo's Memory Game</h1>
            <h3>Get points by clicking on an image, but don't click on any more than once!</h3>
        </div>
    )
}

const Scoreboard = (props) => {
    return (
        <div className="Scoreboard">
            <p>Current Score: {props.currentScore} | High Score: {props.highScore}</p>
        </div>
    )
}
export default App;