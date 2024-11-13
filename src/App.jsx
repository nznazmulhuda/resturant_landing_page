import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="fixed w-full">
        <Navbar />
      </div>

      <Hero />
    </>
  );
}

export default App;
