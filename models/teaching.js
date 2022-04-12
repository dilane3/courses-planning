import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";
import Subject from "./subject.js";
import Teacher from "./teacher.js";

// Create Teaching model
class Teaching extends Model {}

// Initialization of the structure
Teaching.init({
  idCours: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Subject,
      key: 'idCours'
    }
  },
  matricule: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Teacher, 
      key: 'matricule'
    }
  },
  annee: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Teaching",
  tableName: 'enseigner',
  timestamps: false
})

// Relation between Teacher and Subject
Teacher.belongsToMany(Subject, {
  through: "Teaching"
})
Subject.belongsToMany(Teacher, {
  through: "Teaching"
})

export default Teaching