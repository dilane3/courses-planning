import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";

// Create Faculty model
class Faculty extends Model {}

// Initialization of the structure
Faculty.init({
  idFil: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomFil: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Faculty",
  tableName: 'filiere',
  timestamps: false
})

export default Faculty