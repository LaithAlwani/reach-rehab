import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Partners from "./components/Partners";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <About />
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

export default App;
