import "./App.css";
import Converter from "./components/Converter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center justify-center font-bold text-4xl">
      <Converter />
      <Footer />
    </div>
  );
};

export default App;
