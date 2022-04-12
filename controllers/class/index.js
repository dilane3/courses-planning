// Controller for class entity

// Import models
import Class from "../../models/class.js"
import Faculty from "../../models/faculty.js"
import Level from "../../models/level.js"

class ClassController {
  /**
   * Create a class instance inside the database
   */
  static async createClass (req, res) {
    const {
      nom,
      idFaculty,
      idLevel
    } = req.body

    if (nom && idFaculty && idLevel) {
      const verification = await ClassController.verifyFacultyAndLevel(idFaculty, idLevel)
      
      if (verification) {
        const classe = Class.build({
          nomClasse: nom,
          FacultyIdFil: idFaculty,
          LevelIdNiv: idLevel
        })
  
        try {
          // Save class
          await classe.save()
  
          res.status(201).json({ data: classe })
        } catch (err) {
          console.error(err)
  
          res.status(500).json({ error: "An error occurs" })
        }
      } else {
        res.status(500).json({ error: "The id of the faculty or of the level doesn't exist" })
      }
    } else {
      res.status(400).json({ error: "Provide all the elements" })
    }
  }

  /**
   * Get all classes from the database
   */
  static async getClasses (req, res) {
    try {
      // Retreive all classes from database
      const classes = await Class.findAll()

      res.json({ data: classes })
    } catch (err) {
      console.error(err)

      res.status(500).json({ error: "An error occurs" })
    }
  }

  /**
   * Verify if a faculty and level exist in the database
   * @param {number} idFaculty 
   * @param {number} idLevel 
   * @returns boolean
   */
  static async verifyFacultyAndLevel (idFaculty, idLevel) {
    try {
      const faculty = await Faculty.findByPk(idFaculty)
      const level = await Level.findByPk(idLevel)

      
      if (faculty && level) {
        return true
      } else {
        console.log({ faculty, level })
        return false
      }
    } catch (err) {
      console.error(err)

      return false
    }
  }
}

export default ClassController