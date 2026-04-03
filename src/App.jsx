import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./Components/Home"));
const Contact = lazy(() => import("./Components/Contact"));
const About = lazy(() => import("./Components/About"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>Loading... ⏳</h2>}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
