import "./App.css";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import About from "./components/About";
import Start from "./components/Start";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="scroll-smooth">
      <Toaster />
      <NavBar />
      <Start />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
