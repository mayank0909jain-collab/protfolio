
import About from "./Component/About";
import Home from "./Component/Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Component/Project";
import Contect from "./Component/Contect";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Projects/>} />
         <Route path="/contact" element={<Contect/>} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
