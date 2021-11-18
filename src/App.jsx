import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <NavBar darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
