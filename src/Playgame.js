import React, { Component } from 'react'
import './Playgame.css'

class Playgame extends Component {
    render(){
        function reloadPage(){
            window.location.reload(false);
        }
        return(
            <div className="Playgame-container">
                <button className="Playgame-btn" onClick={reloadPage}>Play Again!</button>
            </div>
        )
    }
}

export default Playgame;