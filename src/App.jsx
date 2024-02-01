import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Education from "./Components/Education";

function App() {
 
  return (
    <div
      className={` bg-[#191924] w-full h-full overflow-x-hidden text-white `}
    >
      <Router>
        <Navbar />

        <div className=" w-full">
          <MainContainer />
          <div className="pentagon-clip-small md:pentagon-clip w-full">
            <Skills />
          </div>
          <div className="relative w-full">
            <Projects />
          </div>
          <div className="bg-gradient-to-b from-[#1C1C27] via-[#1E1C29] to-[#31193F]">
          <Education/>
            <Footer/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
