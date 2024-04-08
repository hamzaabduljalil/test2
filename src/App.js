import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import WeAre from "./components/WeAre/WeAre";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
      <Routes>
        <Route path="/Team" element={<Team></Team>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/projects" element={<Projects></Projects>} />
      </Routes>
      <Routes>
        <Route path="/we-are" element={<WeAre></WeAre>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
