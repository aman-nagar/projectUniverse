// Header.jsx
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header" className="flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="w-20"/>
      <h1>Investment Calculator</h1>
    </header>
  );
}