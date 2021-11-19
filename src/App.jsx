import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import WorkSection from "./Components/Works/WorkSection";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <NavBar darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/works" element={<WorkSection />} />
      </Routes>
    </div>
  );
}

export default App;
