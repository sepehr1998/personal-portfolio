import { Routes, Route } from 'react-router-dom';

import Home from'./pages/Home';
import Navbar from "./components/Navbar";
import PortfolioPreview from "./pages/PortfolioPreview";

function App() {

  return (
      <>
          <Navbar />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/portfolio/:projectId" element={<PortfolioPreview />} />
          </Routes>
      </>

  )
}

export default App
