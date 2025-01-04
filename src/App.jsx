import "./App.css";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import ParticleCanvas from "./components/ParticleCanvas";

function App() {
  return (
    <>
      <ParticleCanvas />
      <NavBar />
      <IntroSection />
    </>
  );
}

export default App;
