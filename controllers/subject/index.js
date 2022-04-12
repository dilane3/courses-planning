// Controller for Subject entity

// Imports models
import Class from '../../models/class.js'
import Speciality from '../../models/speciality.js'
import Subject from '../../models/subject.js'

class SubjectController {
  /**
   * Create a subject
   */
  static async createSubject (req, res) {
    const {
      libelle,
      description,
      idClass,
      idSpeciality
    } = req.body

    // Verify if all the required data are provided
    if (libelle && description && idClass) {
      const { verifyIdRoomAndIdSpeciality } = SubjectController

      // Verify if the room and the speciality are stored in the database
      const verification = await verifyIdRoomAndIdSpeciality(idClass, idSpeciality)

      if (verification) {
        const subject = Subject.build({
          libelle,
          description,
          ClassIdClasse: idClass,
          SpecialityIdSpec: idSpeciality
        })

        try {
          // Save the subject
          await subject.save()

          res.status(201).json({ data: subject })
        } catch (err) {
          console.error(err)

          res.status(500).json({ error: "An error occured" })
        }
      } else {
        res.status(404).json({ error: "Class or speciality is not found" })
      }
    } else {
      res.status(500).json({ error: "Provide all the data required" })
    }
  }

  /**
   * Verify if the room and the speciality exist
   * @param {number} idClass 
   * @param {number} idSpeciality 
   * @returns 
   */
  static async verifyIdRoomAndIdSpeciality (idClass, idSpeciality = null) {
    try {
      // Getting room from the database based on its id
      const classe = await Class.findByPk(idClass)

      console.log({ classe })

      // Verify if the id of the speciality has been provided
      if (idSpeciality) {
        // Getting speciality from the database based on its id
        const speciality = await Speciality.findByPk(idSpeciality)

        // Verify if the speciality and the room exist in the database
        if (speciality && classe) {
          return true
        }

        return false
      } else {
        if (classe) {
          return true
        }

        return false
      }
    } catch (err) {
      console.error(err)

      return false
    }
  }
}

export default SubjectController