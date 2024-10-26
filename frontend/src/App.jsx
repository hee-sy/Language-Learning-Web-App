import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/:id/home" element={<Home />} />
    </Routes>
  );
};

export default App;
