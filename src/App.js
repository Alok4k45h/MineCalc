import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// importing all pages
import BurdenSpacing from "./Pages/BurdenSpacing";
import HomePage from "./Pages/HomePage";
import Ppv from "./Pages/Ppv";
import Npv from "./Pages/Npv";
import Rqd from "./Pages/Rqd";
import PressureMine from "./Pages/PressureMine";

//importing css
import "./App.css";

//importing Global Component
import ScrollToTop from "./Components/GlobalComponent/ScrollToTop/ScrollToTop";
import Top from "./Components/GlobalComponent/Top/Top";
import Navbars from "./Components/GlobalComponent/Navbars/Navbars";
import FooterSection from "./Components/GlobalComponent/Footer/FooterSection";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbars />
        <Routes>
          {/*Creating route for every page*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/burdenspacing" element={<BurdenSpacing />} />
          <Route path="/ppv" element={<Ppv />} />
          <Route path="/npv" element={<Npv />} />
          <Route path="/rqd" element={<Rqd />} />
          <Route path="/pressuremine" element={<PressureMine />} />
        </Routes>
        <Top />
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
