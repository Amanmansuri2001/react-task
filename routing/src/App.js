import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import About from "./page/About";
import Contact from "./page/Contact";
import Project from "./page/Project";
import Service from "./page/Service";
import Team from "./page/Team";
import Testomonial from "./page/Testomonial";
import Header from "./components/Header";
import Footer from "./components/Footer";

 

 

function App() {
  return (
 <div>
  
  <BrowserRouter>
  <Routes> 
    <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
    <Route path="/about" element={<><Header/><About/><Footer/></>}></Route>
    <Route path="/contact" element={<><Header/><Contact/><Footer/></>}></Route>
    <Route path="/project" element={<><Header/><Project/><Footer/></>}></Route>
    <Route path="/service" element={<><Header/><Service/><Footer/></>}></Route>
    <Route path="/team" element={<><Header/><Team/><Footer/></>}></Route>
    <Route path="/testomonial" element={<><Header/><Testomonial/><Footer/></>}></Route>

  </Routes>
  </BrowserRouter>
   
 </div>
  );
}

export default App;
