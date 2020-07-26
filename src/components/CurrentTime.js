import React, { Component }  from 'react';

export default class CurrentTime extends Component {

    
    render() {
        return (
    
            <div className="current-time">
                {this.getCurrentTime()}
            </div>
            )
        }

     getCurrentTime = () => {
 
         let today = new Date(); 
         let hours = today.getHours();
         let minutes = today.getMinutes()
         let seconds = today.getSeconds()

         let currentTimeOfDay = hours + ":" + minutes + ":" + seconds

         console.log(currentTimeOfDay)
     }


}