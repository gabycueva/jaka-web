import './App.css';
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";
import Collection from "./containers/Collection";
import Bio from "./containers/Bio";
import Contact from "./containers/Contact";

function App() {
  return (
    <div className="App">
      <Layout children={
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/bio" element={<Bio />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
      }/>
    </div>
  );
}

export default App;
