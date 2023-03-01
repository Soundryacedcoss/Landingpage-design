import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Middle } from "./components/Middle";

function App() {
  return (
    <div className="App">
      <Hero />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
