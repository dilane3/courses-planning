import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";
import Level from "./level.js";
import Speciality from "./speciality.js";
import Subject from "./subject.js";
import Teacher from "./teacher.js";

// Create LevelSpec model
class LevelSpec extends Model {}

// Initialization of the structure
LevelSpec.init({
  idNiv: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Level,
      key: 'idNiv'
    }
  },
  idSpec: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Speciality, 
      key: 'idSpec'
    }
  }
}, {
  sequelize,
  modelName: "LevelSpec",
  tableName: 'niv_spec'
})

// Relation between Teacher and Subject
Speciality.belongsToMany(Level, {
  through: "LevelSpec"
})
Level.belongsToMany(Speciality, {
  through: "LevelSpec"
})

export default LevelSpec