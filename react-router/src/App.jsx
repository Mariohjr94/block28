import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Purple from "./components/Purple";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div id="container">
      <NavBar />

      <div id="main-section">
        <Routes>
          <Route path="/blue" Component={Blue} />
          <Route path="/red" Component={Red} />
          <Route path="/purple" Component={Purple} />
          <Route path="/" Component={Home} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
