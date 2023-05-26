import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
