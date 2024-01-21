// Results.jsx
import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].annualInvestment;

  console.log(resultsData);
  return (
    <table id="result" className="w-full">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="py-2 px-16">Year</th>
          <th className="py-2 px-4">Investment Value</th>
          <th className="py-2 px-4">Interest Year</th>
          <th className="py-2 px-4">Total Interest</th>
          <th className="py-2 px-4">Investment Capital</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300">
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year} className="text-center">
              <td className="py-2 px-4">{yearData.year}</td>
              <td className="py-2 px-4">{formatter.format(yearData.valueEndOfYear)}</td>
              <td className="py-2 px-4">{formatter.format(yearData.interest)}</td>
              <td className="py-2 px-4">{formatter.format(totalInterest)}</td>
              <td className="py-2 px-4">{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
