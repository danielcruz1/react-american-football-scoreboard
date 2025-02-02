//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, homeScore] = useState(0);
  const [visitor, visitorScore] = useState(0);
  // Stretch 
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const clock = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1)
      } else {
        clearTimeout(clock)
      }
    }, 1000)
  },)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Dolphins</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:{timer}</div>
          <div className="away">
            <h2 className="away__name">49ERS</h2>
            <div className="away__score">{visitor}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => {
            homeScore(home + 7); 
          }}>Home Touchdown</button>

          <button className="homeButtons__fieldGoal" onClick = {() => {
            homeScore(home + 3);
          }}>Home Field Goal</button>
        </div>



        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => {
            visitorScore(visitor + 7);
          }}>Away Touchdown</button>

          <button className="awayButtons__fieldGoal" onClick = {() => {
            visitorScore(visitor + 3);
          }}>Away Field Goal</button>
        </div>
      </section>

    </div>
  );
}

export default App;
