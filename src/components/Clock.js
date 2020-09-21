import React, { Component }  from 'react';
import numberImages from './data.js';




export default class Clock extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            // hourTens: null,
            // hourOnes: null,
            // minuteTens: null,
            // minuteOnes: null,
            secondTens: null,
            secondOnes: null
        }
    }



    dateParseIntoComponents = (date) => {

        // seconds ones and tens work, 10 only shows on update though
        // minute ones seems to be working fine
        // minute tens is updating funky

// console.log(date.getHours())
// console.log(this.state.date)
      

        // date.getSeconds() = gets just the seconds
        // date arg gives me actual date
        // make the date into diff components like below
        // this.state.hourTens = this.state.hourOnes + 1
        // this.state.hourOnes = date.getHours()
        // this.state.minuteTens = this.state.minuteOnes + 1
        // this.state.minuteOnes = date.getMinutes()
        // this.state.secondTens = this.state.secondOnes + 1
    }


    



    componentDidMount() {
        this.interval = setInterval(
            () => this.tickTock(), 1000
        )
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    tickTock = () => {
        let d = new Date()
        this.setState({
            hourTens: Math.floor(d.getHours() / 10),
       hourOnes: d.getHours() % 10,
      minuteTens: Math.floor(d.getMinutes() / 10),
        minuteOnes: d.getMinutes() % 10,
        secondTens: Math.floor(d.getSeconds() / 10),
       secondOnes: d.getSeconds() % 10
        });
    
        console.log(this.state)
    }


    generateHourImages = () => {

        return numberImages.map((numImg) => {
            return <img src={numImg} alt="" ></img>

        })
    }




    render() {
        
        return (
            <div className="clock-div">
                <h1>Digital Clock</h1>

        <img src={`../numbers/num${this.state.hourTens}.gif`} alt="" ></img>

        <img src={`../numbers/num${this.state.hourOnes}.gif`} alt="" ></img>

        <img src={`../numbers/num${this.state.minuteTens}.gif`} alt="" ></img>

        <img src={`../numbers/num${this.state.minuteOnes}.gif`} alt="" ></img>

        <img src={`../numbers/num${this.state.secondTens}.gif`} alt="" ></img>

        <img src={`../numbers/num${this.state.secondOnes}.gif`} alt="" ></img>
            </div>
        )
    }

}