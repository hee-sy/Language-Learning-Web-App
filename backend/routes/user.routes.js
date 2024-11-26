import express from "express";
import { createUser, loginUser, updateLearningStyle, getLearningStyle } from "../controllers/user.controllers.js";

const router = express.Router();

//TODO: Implement MVC architecture

router.post("/register", createUser);

router.post("/login", loginUser);

router.put("/update-learning-style", updateLearningStyle);

router.get("/get-learning-style/:id", getLearningStyle);

export default router;
