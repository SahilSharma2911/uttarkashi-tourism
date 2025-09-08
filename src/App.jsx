import HomePage from "./components/homepage/HomePage";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
