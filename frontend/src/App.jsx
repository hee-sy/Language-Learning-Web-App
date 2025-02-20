import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import IoLSQ from "./pages/IoLSQ";
import IoLSQ_Result from "./pages/IoLSQ_Result";
import LessonB from "./pages/LessonB";
import FinalQuiz from "./pages/FinalQuiz";
import FinalQuizResult from "./pages/FinalQuizResult";
import LessonA from "./pages/LessonA";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/:id/home" element={<Home />} />
      <Route path="/:id/iolsq" element={<IoLSQ />} />
      <Route path="/:id/iolsq/results/:ans" element={<IoLSQ_Result />} />
      <Route path="/:id/LessonB" element={<LessonB />} />
      <Route path="/:id/LessonA" element={<LessonA />} />
      <Route path="/:id/FinalQuiz" element={<FinalQuiz />} />
      <Route path="/:id/FinalQuiz/results/:ans" element={<FinalQuizResult />} />
    </Routes>
  );
};

export default App;
