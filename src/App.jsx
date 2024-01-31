// App.jsx
import Home from './Home';
import InvestmentCalc from './investment_calc/components/InvestmentCalc.jsx';
import CountDown from './countdown_game/components/CountDown.jsx';
import ProjectManagementApp from './project_managment_app/components/ProjectManagement.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopifyApiComponent from './shopifyApi/ShopifyApiComponent.tsx';
import Ecom from './e-com/components/Ecom.jsx';

function App() {
  return (
    <BrowserRouter basename="/projectuniverse">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investment-calculator" element={<InvestmentCalc />} />
        <Route path="/countdown-timer" element={<CountDown />} />
        <Route path="/project-management-app" element={<ProjectManagementApp/>} />
        <Route path="/shopify-api" element={<ShopifyApiComponent/>} />
        <Route path="/ecom" element={<Ecom/>} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
