// Controller for Speciality entity

// Some imports
import Speciality from "../../models/speciality.js";

class SpecialityController {
  static async createSpeciality (req, res) {
    const { nomSpeciality } = req.body

    if (nomSpeciality) {
      const speciality = Speciality.build({ nomSpec: nomSpeciality })
      
      try {
        await speciality.save()

        res.status(201).json({ data: speciality })
      } catch (err) {
        console.error(err)

        res.status(500).json({ error: "An error occured" })
      }
    } else {
      res.status(400).json({ error: "Provide the name of the speciality" })
    }
  }
}

export default SpecialityController