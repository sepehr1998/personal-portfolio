import { Routes, Route } from 'react-router-dom';

import Home from'./pages/Home';
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
function App() {

  return (
      <Routes>
          <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='portfolio' element={<Portfolio/>} />
          </Route>
      </Routes>
  )
}

export default App
