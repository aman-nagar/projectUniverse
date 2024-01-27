import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("unknown entity");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleClick(); 
    }
  }
  return (
    <section id="player">
      <h2 className="my-5 font-bold">Welcome {enteredPlayerName}</h2>
      <p className="flex ">
        <input type="text" ref={playerName} onKeyPress={handleKeyPress} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
