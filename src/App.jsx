import "./App.css";
import "aos/dist/aos.css";
import About from "./components/about/About";
import BackToTopButton from "./components/backToTop/BackToTopButton";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/hero/Home";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";

import { useAppContext } from "./context/AppConetxt";

function App() {
  const { darkMode } = useAppContext();
  return (
    <div className={`app ${darkMode ? "dark_mode" : "light_mode"}`}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
