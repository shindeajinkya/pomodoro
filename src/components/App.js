import React, { useState } from 'react';
import '../App.css'
import BreakInterval from './BreakInterval'
import SessionLength from './SessionLength';
import Timer from './Timer';

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timerMinute, setTimerMinute] = useState(25)
  const [play, setPlay] = useState(false)

  function onToggleInterval(isSession) {
    if(isSession){
      setTimerMinute(sessionLength)
    }
    else{
      setTimerMinute(breakLength)
    }
  }

  let onUpdateTimerMinute = () => setTimerMinute(timerMinute => timerMinute - 1)
  let onResetTimer = () => setTimerMinute(sessionLength)
  function onPlayStopTimer(isPlaying) {
    setPlay(isPlaying)
  }
  
  return (
    <div className='container'>
      <main>
        <h2>Pomodoro Timer</h2>
        <div className='pomodoro-container flex'>
          <Timer 
            timerMinute={timerMinute} 
            breakLength={breakLength}
            updateTimerMinute={onUpdateTimerMinute}
            toggleInterval={onToggleInterval}
            resetTimer={onResetTimer}
            onPlayStopTimer={onPlayStopTimer}
          />
          <section className='interval-length-container'>

            <SessionLength 
              incrementSession={() => {
                setSessionLength(sessionLength => sessionLength + 1)
                setTimerMinute(timerMinute => timerMinute + 1)
              }}
              decrementSession={() => {
                setSessionLength(sessionLength => sessionLength - 1)
                setTimerMinute(timerMinute => timerMinute - 1)
              }}
              play={play}
              sessionLength={sessionLength}
            />

            <BreakInterval 
              incrementBreak={() => setBreakLength(breakLength => breakLength + 1)} 
              decrementBreak={() => setBreakLength(breakLength => breakLength - 1)}
              play={play}
              breakInterval={breakLength}  
            />

          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
