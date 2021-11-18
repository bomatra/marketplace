import React from "react";
import Card from "../card/card";
import './content.css';

class ContentArea extends React.Component {

    render() {
        const cards = this.props.members.map(element => {
            return <Card {...element}></Card>
        });
        return (
            <div class='row scrollable-content'>
                {cards}
            </div>
        )
    }
}


export default ContentArea;