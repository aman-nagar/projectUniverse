  // Home.jsx
  import { Link } from "react-router-dom";

  export default function Home() {
    return (
      <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] min-h-screen">
        <h2 className="text-white">Home Page</h2>
        <ul>
          <li>
            <Link to="/investment-calculator" className="text-white">
              Investment Calculator
            </Link>
            <Link to="/countdown-timer" className="text-white">
              Countdown Timer
            </Link>
            
          </li>
        </ul>
      </div>
    );
  }
