import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render(){
        return(
            <div className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="left">Clicky Game</li>
                    <li className="middle">Click and image to begin!</li>
                    <li className="right">Score: {this.props.score}</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;