import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Romi from "./pages/Romi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/romi" element={<Romi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
