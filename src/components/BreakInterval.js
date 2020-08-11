import React from 'react'

function BreakInterval(props) {
    function decrementCounter(){
        if (props.breakInterval === 1){
            return
        }
        props.decrementBreak()
    }

    function incrementCounter() {
        if(props.breakInterval === 30) {
            return
        }
        props.incrementBreak()
    }

    return (
        <section className="main-interval flex">
            <h4>Break Length</h4>
            <section className='interval-container'>
                <button disabled={props.play} onClick={incrementCounter}>+</button>
                <p className='interval-length'>{props.breakInterval}</p>
                <button disabled={props.play} onClick={decrementCounter}>-</button>
            </section>
        </section>
    )
}

export default BreakInterval