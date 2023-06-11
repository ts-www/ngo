import "./App.css";
import  Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import { Routes, Route } from "react-router-dom";
import OurMission from "./components/OurMission";
import Impact from "./components/Impact";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mission" element={<OurMission />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
