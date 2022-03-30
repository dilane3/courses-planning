import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";

// Create Speciality model
class Speciality extends Model {}

// Initialization of the structure
Speciality.init({
  idSpec: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomSpec: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Speciality",
  tableName: 'specialite'
})

export default Speciality