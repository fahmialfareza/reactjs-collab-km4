import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arham from "./pages/Arham";
import Home from "./pages/Home";
import Victor from "./pages/Victor";
import Romi from "./pages/Romi";
import AtillaPage from "./pages/AtillaPage";
import Syuhda from "./pages/Syuhda";
import UserLists from "./pages/UserLists";
import DetailsUser from "./pages/DetailsUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/romi" element={<Romi />} />
        <Route path="/atilla" element={<AtillaPage />} />
        <Route path="/arham" element={<Arham />} />
        <Route path="/victor" element={<Victor />} />
        <Route path="/syuhda" element={<Syuhda />} />
        <Route path="/user-lists" element={<UserLists />} />
        <Route path="/users/:id" element={<DetailsUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
