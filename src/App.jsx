import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";

function App() {

  return (
    <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App;
