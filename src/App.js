import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arham from "./pages/Arham";
import Home from "./pages/Home";
import Syuhda from "./pages/Syuhda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arham" element={<Arham />} />
        <Route path="/syuhda" element={<Syuhda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
