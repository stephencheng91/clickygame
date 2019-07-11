import React from "react";
import "./style.css"

function NavBar(props) {
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="nav-item">
                    {props.title}
                </li>
                <li className="nav-item">
                    {props.roundResult}
                </li>
                <li className="nav-item">
                    Score: {props.score} || Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;