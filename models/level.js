import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";

// Create Level model
class Level extends Model {}

// Initialization of the structure
Level.init({
  idNiv: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomNiv: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Level",
  tableName: 'niveau'
})

export default Level