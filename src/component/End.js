import React from 'react'
import winner from "../undraw_winners_ao2o 2.svg";

function End({score}) {
    return (
        <div className="section">
            <div className="end">
            <img src={winner} alt=""/>
            <h3>Results</h3>
            <p>You got {score} correct answers</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        </div>
    )
}

export default End
