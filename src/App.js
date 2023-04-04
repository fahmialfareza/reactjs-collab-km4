import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arham from "./pages/Arham";
import Home from "./pages/Home";
import Daniel from "./pages/Daniel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arham" element={<Arham />} />
        <Route path="/daniel" element={<Daniel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
