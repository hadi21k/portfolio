import "./App.css";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import WorkPage from "./Components/Works/WorkPage";

function App() {
  const location = useLocation();
  const darkMode = useSelector((state) => state.data.darkMode);
  return (
    <div
      className={`${
        localStorage.getItem("darkMode") === "true" ? "dark" : ""
      } openSans`}
    >
      <NavBar />
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
