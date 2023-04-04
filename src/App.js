import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Firhan from "./pages/Firhan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firhan" element={<Firhan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
