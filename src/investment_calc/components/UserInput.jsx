// UserInput.jsx
import React, { useState } from "react";

export default function UserInput({onChange,userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">
            Initial Investment
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
            />
          </label>
        </p>

        <p>
          <label htmlFor="annualInterestRate">
            Annual Interest Rate
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChange("annualInterestRate", event.target.value)
              }
            />
          </label>
        </p>

        <p>
          <label htmlFor="expectedReturn">
            Expected Return
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            />
          </label>
        </p>

        <p>
          <label htmlFor="duration">
            Duration
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) => onChange("duration", event.target.value)}
            />
          </label>
        </p>
      </div>
    </section>
  );
}
