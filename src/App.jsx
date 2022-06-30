import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Partners from "./components/Partners";
import MailingList from "./components/MailingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <About />
        <Partners />
        <MailingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
