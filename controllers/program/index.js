import Class from "../../models/class.js"
import Faculty from "../../models/faculty.js"
import Program from "../../models/program.js"
import Room from "../../models/room.js"
import Subject from "../../models/subject.js"
import Teacher from '../../models/teacher.js'

class ProgramController {
  static async getProgram(req, res) {
    const level = "licence 1"

    try {
      const programs = await Subject.findAll({
        attributes: [
          "idCours",
          "libelle"
        ],
        include: [
          {
            model: Room,
            attributes: [
              "codeSalle",
              "idSalle"
            ]
          },{
            model: Teacher,
            attributes: [
              "nomEns"
            ]
          }
        ]
      })

      // const programs = await Subject.findAll({
      //   attributes: [
      //     "idCours",
      //     "libelle"
      //   ],
      //   include: [
      //     {
      //       model: Program,
      //       attributes: [
      //         "jour",
      //         "date_deb",
      //         "date_fin"
      //       ]
      //     }
      //   ]
      // })

      // const classes = await Class.findAll({
      //   attributes: [
      //     "idClasse",
      //     "nomClasse"
      //   ],
      //   include: [{
      //     model: Faculty,
      //     attributes: [
      //       "idFil",
      //       "nomFil"
      //     ]
      //   }]
      // })

      res.json({ data: programs })
    } catch (err) {
      console.log(err)

      res.json({ error: "Error occurs while getting the program" })
    }
  }
}

export default ProgramController