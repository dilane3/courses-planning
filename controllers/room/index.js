import Room from "../../models/room.js"

class RoomController {
  /**
   * Create a new Room
   */
  static async createRoom(req, res) {
    const { name } = req.body

    if (name) {
      const room = Room.build({ codeSalle: name })

      try {
        await room.save()

        res.json({ data: room })
      } catch (err) {
        console.log(err)

        res.json({ error: "Error while creating a room" })
      }
    } else {
      res.json({ error: "Provide the room name" })
    }
  }

  static async getRooms(req, res) {
    try {
      const rooms = await Room.findAll({ 
        attributes: [
          "idSalle", 
          "codeSalle"
        ]
      })

      res.json({ data: rooms })
    } catch (err) {
      console.log(err)

      res.json({ error: "Error while getting rooms" })
    }
  }
}

export default RoomController