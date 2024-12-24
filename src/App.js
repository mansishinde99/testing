import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import About from "./components/About";
import Services from "./components/Services"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
