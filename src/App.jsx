import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <div className="z-10 fixed w-full top-0 left-0">
        <Navbar />
      </div>

      <div className="flex flex-col gap-[120px] w-full px-10 md:px-20 mt-[150px]">
        <Hero />
        <Services />
      </div>
    </div>
  );
};

export default App;
