import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          {props.children.title}
        </li>
        <li className="nav-item">
          {props.children.roundResult}
        </li>
        <li className="nav-item">
          Score: {props.children.score} || Top Score: {props.children.topScore}
        </li>
      </ul>

    </div>
  );

}

export default Title;
