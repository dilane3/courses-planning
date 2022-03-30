import express from "express";
import RoomController from "../controllers/room/index.js";

const RoomRouter = express.Router()

RoomRouter.post("/create", RoomController.createRoom)
RoomRouter.get("/", RoomController.getRooms)

export default RoomRouter