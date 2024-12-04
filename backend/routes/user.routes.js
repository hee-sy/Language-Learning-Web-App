import express from "express";
import { createUser, loginUser, updateLearningStyle, updateLearningStyleScore, getLearningStyle, updateEOL, getEOLByLesson, updateFinalQuizResult } from "../controllers/user.controllers.js";

const router = express.Router();

//TODO: Implement MVC architecture

router.post("/register", createUser);

router.post("/login", loginUser);

router.put("/update-learning-style", updateLearningStyle);

router.post("/update-learning-style-score", updateLearningStyleScore);

router.get("/get-learning-style/:id", getLearningStyle);

router.post("/update-eol-summaries/:id/:lesson/:part", updateEOL);
router.get("/get-eol-summaries/:id/:lesson", getEOLByLesson);

router.post("/update-final-quiz-result", updateFinalQuizResult);

export default router;
