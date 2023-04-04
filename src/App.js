import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arham from "./pages/Arham";
import Home from "./pages/Home";
import Romi from "./pages/Romi";
import AtillaPage from "./pages/AtillaPage";
import Syuhda from "./pages/Syuhda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/romi" element={<Romi />} />
        <Route path="/atilla" element={<AtillaPage />} />
        <Route path="/arham" element={<Arham />} />
        <Route path="/syuhda" element={<Syuhda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
