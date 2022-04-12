// Controller of level

import Level from "../../models/level.js"

class LevelController {
  static async createLevel (req, res) {
    const { nom } = req.body

    if (nom) {
      try {
        const level = Level.build({ nomNiv: nom })

        await level.save()

        res.status(201).json({ data: level })
      } catch (err) {
        console.log(err)

        res.status(500).json({ error: "An error occurs" })
      }
    } else {
      res.sendStatus(400)
    }
  }

  static async getLevels (req, res) {
    try {
      const levels = await Level.findAll()

      res.json({ data: levels })
    } catch (err) {
      console.log(err)

      res.status(500).json({ error: "An Error occurs" })
    }
  }
}

export default LevelController