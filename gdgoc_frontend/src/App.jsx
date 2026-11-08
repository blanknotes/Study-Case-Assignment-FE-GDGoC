import { Routes, Route } from "react-router-dom";
import ComingSoon from '/pages/ComingSoon'
import LandingPage from '/pages/LandingPage'
import Overview from '/pages/Overview'

export default function App() {
  return (
    <div>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Overview" element={<Overview />} />
            <Route path="/*" element={<ComingSoon />} />
          </Routes>
        </div>
    </div>
  );
}