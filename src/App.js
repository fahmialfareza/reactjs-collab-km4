import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arham from "./pages/Arham";
import Home from "./pages/Home";
import AtillaPage from "./pages/AtillaPage";
import Syuhda from "./pages/Syuhda";
import Nirvan from "./pages/Nirvan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atilla" element={<AtillaPage />} />
        <Route path="/arham" element={<Arham />} />
        <Route path="/syuhda" element={<Syuhda />} />
        <Route path="/nirvan" element={<Nirvan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
