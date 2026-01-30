import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ThemeSelector from "./Pages/components/ThemeSelector.jsx";
import Home from "./Pages/home/Home";

export default function App() {
  const location = useLocation();

  return (
    <>
    <ThemeSelector />
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
    
  );
}