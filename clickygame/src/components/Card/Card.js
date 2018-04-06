import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={props.clicked}>
        <div className="image-container">
            <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)}/>
        </div>
    </div>
);

export default Card;