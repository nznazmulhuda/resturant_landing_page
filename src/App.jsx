import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="fixed w-full">
        <Navbar />
      </div>

      {/* hero section */}
      <Hero />

      {/* about section */}
      <About />
    </>
  );
}

export default App;
