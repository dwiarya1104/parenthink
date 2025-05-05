import { Navbar } from "./components/Navbar";
import "./index.css";
import { About } from "./parts/About";
import { Articles } from "./parts/Articles";
import { Content } from "./parts/Content";
import { Hero } from "./parts/Hero";
import { OurTeam } from "./parts/OurTeam";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Articles />
      <Content />
      <OurTeam />
    </>
  );
}

export default App;
