import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import IoLSQ from "./pages/IoLSQ";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/:id/home" element={<Home />} />
      <Route path="/:id/iolsq" element={<IoLSQ />} />
    </Routes>
  );
};

export default App;
