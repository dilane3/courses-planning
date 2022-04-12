import express from "express";
import LevelController from "../controllers/level/index.js";

const LevelRouter = express.Router()

// Some routers
LevelRouter.post("/create", LevelController.createLevel)
LevelRouter.get("/all", LevelController.getLevels)

export default LevelRouter