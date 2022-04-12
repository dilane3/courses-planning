import express from "express";
import FacultyController from "../controllers/faculty/index.js";

const FacultyRouter = express.Router()

// Set some routes
FacultyRouter.post("/create", FacultyController.createFaculty)
FacultyRouter.get("/all", FacultyController.getFaculties)

export default FacultyRouter