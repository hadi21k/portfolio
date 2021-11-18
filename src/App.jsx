import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="">
      <NavBar darkMode={darkMode} />
      <Main />
    </div>
  );
}

export default App;
