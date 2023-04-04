import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arham from "./pages/Arham";
import Mulyana from "./pages/Mulyana";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arham" element={<Arham />} />
        <Route path="/mulyana" element={<Mulyana />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
