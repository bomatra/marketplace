import React from 'react';
import Header from '../header/header'
import ContentArea from '../content/content'
import Footer from '../footer/footer';
import Subheader from '../sub-header/sub-header'

let id = 2;
class Conatiner extends React.Component {

    constructor(props) {
        super(props);
        this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
        // Initial state
        this.state = {
            members: [
                { id: 1, head: 'Bud Baxter', description: 'household contact', fruit: 'Apple' },
                { id: 2, head: 'Bud Baxter', description: 'household contact', fruit: 'Apple' }
            ]
        }
    }

    handleButtonOnClick(e) {
        const members = [...this.state.members, ...[{ id: id++, head: 'Bud Baxter', description: 'household contact', fruit: 'Apple' }]];
        this.setState((state) => { return { ...state, members } });
    }

    render() {
        return <div class='container'>
            <Header class='header'></Header>
            <Subheader class='row'></Subheader>
            <ContentArea class='row' members={this.state.members}></ContentArea>
            <Footer class='row' addMember={this.handleButtonOnClick}></Footer>
        </div >
    }

}

export default Conatiner;