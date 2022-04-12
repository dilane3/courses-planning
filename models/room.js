import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";

// Create Room model
class Room extends Model {}

// Initialization of the structure
Room.init({
  idSalle: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  codeSalle: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Room",
  tableName: 'salle',
  timestamps: false
})

export default Room