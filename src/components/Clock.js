import React, { Component }  from 'react';


export default class Clock extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            date: new Date()
        }
    }

    // look into mounting?

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tickTock(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tickTock = () => {
        this.setState({
            date: new Date()
        });
    }

    // arrow method set interval or set timeout to try and get the time to start increasing 

    render() {
        return (
            <div className="clock-div">
                <h1>Digital Clock</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }

}