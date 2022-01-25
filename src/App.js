import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
