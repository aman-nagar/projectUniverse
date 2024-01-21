// InvestmentCalc.jsx
import { useState } from "react";
import Header from "./Header";
import "../assets/style.css";
import UserInput from "./UserInput";
import Results from "./Results";

export default function InvestmentCalc() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <section className="">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center text-red-300">Please Enter Duration Greater than Zero</p>
      )}
    </section>
  );
}
