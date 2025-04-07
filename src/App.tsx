import Navbar from "./components/Navbar";
import "../src/styles/index.css";
import Footer from "./components/Footer";
import ToDoWrapper from "./components/ToDoWrapper";

function App() {
  return (
    <div>
      <Navbar />
      <ToDoWrapper />
      <Footer />
    </div>
  );
}

export default App;
