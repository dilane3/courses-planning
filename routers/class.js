import express from "express";
import ClassController from '../controllers/class/index.js'

const ClassRouter = express.Router()

// Some routes
ClassRouter.post("/create", ClassController.createClass)
ClassRouter.get("/all", ClassController.getClasses)

export default ClassRouter