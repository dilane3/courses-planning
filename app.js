import express from "express";
import Subject from "./models/subject.js";
import Teacher from "./models/teacher.js";
import Level from "./models/level.js";
import Speciality from "./models/speciality.js";
import Room from "./models/room.js";
import Faculty from "./models/faculty.js"; 
import Class from "./models/class.js";
import Teaching from "./models/teaching.js";
import Program from "./models/program.js";
import LevelSpec from "./models/levelSpec.js";
import sequelize from "./utils/database.js";

// Routers
import RoomRouter from './routers/room.js'
import ProgramRouter from "./routers/program.js";
import FacultyRouter from "./routers/faculty.js";
import LevelRouter from "./routers/level.js";
import ClassRouter from "./routers/class.js";

const app = express()

const PORT = process.env.PORT || 5000

// Use middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get("/", (req, res) => {
  console.log(Subject)
  console.log(sequelize.models.Subject)

  res.send("Application de programmation des cours")
})

app.use("/room", RoomRouter)
app.use("/program", ProgramRouter)
app.use("/faculty", FacultyRouter)
app.use("/level", LevelRouter)
app.use("/class", ClassRouter)

// Launch the app
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)

  try {
    await sequelize.authenticate()

    sequelize.sync()

    console.log("Database connected")
  } catch (err) {
    console.log("There is problem with the database connection")
  }
})