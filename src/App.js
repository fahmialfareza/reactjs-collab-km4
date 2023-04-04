import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Siti from "./pages/Siti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siti" element={<Siti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
