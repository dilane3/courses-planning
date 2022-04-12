import Faculty from '../../models/faculty.js'

// Controller for faculty entity

class FacultyController {
  static async createFaculty (req, res) {
    const { nom } = req.body

    if (nom) {
      const faculty = Faculty.build({ nomFil: nom })

      try {
        await faculty.save()

        res.status(201).json({ data: faculty })
      } catch (err) {
        res.status(500).json({ error: "Errors occurs" })
      }
    } else {
      res.sendStatus(400)
    }
  }

  static async getFaculties (req, res) {
    try {
      const faculties = await Faculty.findAll()

      res.json({ data: faculties })
    } catch (err) {
      res.status(500).json({ error: "Error occurs" })
    }
  }
}

export default FacultyController