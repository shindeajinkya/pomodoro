import React from 'react'

function SessionLength(props) {
    function increaseSession() {
        if(props.sessionLength === 60){
            return;
        }
        props.incrementSession()
    }

    function decreaseSession(){
        if(props.sessionLength === 1){
            return
        }
        props.decrementSession()
    }

    return (
        <section className="main-interval flex">
            <h4>Session Length</h4>
            <section className='interval-container'>
                <button disabled={props.play} onClick={increaseSession}>+</button>
                <p className='interval-length'>{props.sessionLength}</p>
                <button disabled={props.play} onClick={decreaseSession}>-</button>
            </section>
        </section>
    )
}

export default SessionLength