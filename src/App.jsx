import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import WorkPage from "./Components/Works/WorkPage";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <NavBar darkMode={darkMode} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Main />} />
          <Route path="/works" element={<WorkPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
