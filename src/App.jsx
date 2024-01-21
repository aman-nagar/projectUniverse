// App.jsx

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InvestmentCalc from './investment_calc/components/InvestmentCalc.jsx';
import Home from './Home';

function App() {
  return (
    <BrowserRouter basename="/projectuniverse">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investment-calculator" element={<InvestmentCalc />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
