import express from "express";
import { createUser, loginUser, updateLearningStyle, getLearningStyle, updateEOL } from "../controllers/user.controllers.js";

const router = express.Router();

//TODO: Implement MVC architecture

router.post("/register", createUser);

router.post("/login", loginUser);

router.put("/update-learning-style", updateLearningStyle);

router.get("/get-learning-style/:id", getLearningStyle);

router.post("/update-eol-summaries/:part/:id", updateEOL);

export default router;
