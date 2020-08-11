import React, { useState, useRef, useEffect } from 'react'

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}

function Timer(props){
    const [isSession, setIsSession] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const [timerSecond, setTimerSecond] = useState(0)

    useInterval(decreaseTimer, 1000)

    function decreaseTimer(){
        if(isPlaying){
            switch(timerSecond){
                case 0:
                    if(props.timerMinute === 0){
                        if(isSession){
                            setIsSession(false)
                            props.toggleInterval(isSession)
                        }else{
                            setIsSession(true)
                            props.toggleInterval(isSession)
                        }
                    }else {
                        setTimerSecond(59)
                        props.updateTimerMinute()
                    }
                    break;
                default:
                    setTimerSecond(timerSecond => timerSecond - 1)
                    break;
            }
        }
    }

    function playTimer() {
        setIsPlaying(true)
        props.onPlayStopTimer(true)
    }

    function stopTimer() {
        setIsPlaying(false)
        props.onPlayStopTimer(true)
    }

    function resetTimer() {
        setIsPlaying(false)
        setIsSession(true)
        setTimerSecond(0)
        props.resetTimer()
        props.onPlayStopTimer(false)
    }

    return (
        <section className="main-timer-container flex">
            <section className='timer-container flex'>
                <h4>{isSession === true ? 'Session' : 'Break'}</h4>
                <p>
                    <span className='timer'>{props.timerMinute}</span>
                    <span className='timer'>:</span>
                    <span className='timer'>{
                        timerSecond === 0 
                        ? "00" 
                        : timerSecond < 10 
                        ? '0' + timerSecond 
                        : timerSecond
                    }</span>
                </p>
            </section>
            <section className='timer-actions'>
                <button disabled={isPlaying} onClick={playTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </section>
        </section>
    )
}

export default Timer