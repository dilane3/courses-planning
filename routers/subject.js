import express from "express";
import SubjectController from "../controllers/subject/index.js";

const SubjectRouter = express.Router()

// Some routes
SubjectRouter.post("/create", SubjectController.createSubject)

export default SubjectRouter