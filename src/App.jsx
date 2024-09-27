import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="fixed w-full top-0 left-0">
        <Navbar />
      </div>

      <div className="flex flex-col gap-[120px] w-full px-6 md:px-20 mt-[150px]">
        <Hero />
      </div>
    </div>
  );
};

export default App;
