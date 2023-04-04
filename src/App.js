import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AtillaPage from "./pages/AtillaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atilla" element={<AtillaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
