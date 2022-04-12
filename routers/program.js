import express from "express";
import ProgramController from "../controllers/program/index.js";

const ProgramRouter = express.Router()

ProgramRouter.get("/", ProgramController.getProgram)

export default ProgramRouter