import express from "express";
import { createUser, loginUser } from "../controllers/user.controllers.js";

const router = express.Router();

//TODO: Implement MVC architecture

router.post("/register", createUser);

router.post("/login", loginUser);

export default router;
