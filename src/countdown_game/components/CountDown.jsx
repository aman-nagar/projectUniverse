// CountDown.jsx
import React from "react";

import "../assets/style.css";
import Player from "./Player";
import TimerChallenge from "./TimerChallenge";

export default function CountDown() {
  return (
    <>
      <div class="countdown-main p-10 bg-radial-gradient">
        <div id="content" className="flex flex-col items-center gap-10">
          <header>
            <h1 className="text-[40px]">
              The <em>Almost</em> Final Countdown
            </h1>
            <p>Stop the timer once you estimate that time is (almost) up</p>
          </header>
          <Player />
          <div id="challenges">
            <TimerChallenge title={"Easy"} targetTime={1} />
            <TimerChallenge title={"Not easy"} targetTime={5} />
            <TimerChallenge title={"Getting Tough"} targetTime={10} />
            <TimerChallenge title={"Pros only"} targetTime={20} />
          </div>
        </div>
      </div>  
    </>
  );
}
