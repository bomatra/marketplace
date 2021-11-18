import React from "react";
import './card.css';

function Card(props) {
    return (
        <div class="column box">
            <div class='section'>
                <h1>{props.head}</h1>
            </div>
            <div class='section'>
                <span class='label'>Description:</span>
                <span class='value'>{props.description}</span>
            </div>
            <div class='section'>
                <span class='label'>Favorite fruit:</span>
                <span class='value'>{props.fruit}</span>

            </div>
        </div>
    )

}

export default Card;