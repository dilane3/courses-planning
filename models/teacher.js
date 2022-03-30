import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";

// Create Teacher model
class Teacher extends Model {}

// Initialization of the structure
Teacher.init({
  matricule: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomEns: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Teacher",
  tableName: 'enseignant'
})

export default Teacher