import express from "express";
import SpecialityController from '../controllers/speciality/index.js'

const SpecialityRouter = express.Router()

// Some routes
SpecialityRouter.post("/create", SpecialityController.createSpeciality)

export default SpecialityRouter