import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";
import Room from "./room.js";
import Subject from "./subject.js";

// Create Program model
class Program extends Model {}

// Initialization of the structure
Program.init({
  idCours: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Subject,
      key: 'idCours'
    }
  },
  idSalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Room, 
      key: 'idSalle'
    }
  },
  jour: {
    type: DataTypes.STRING
  },
  dateDeb: {
    type: DataTypes.TIME
  },
  dateFin: {
    type: DataTypes.TIME
  }
}, {
  sequelize,
  modelName: "Program",
  tableName: 'programmer'
})

// Relation between Teacher and Subject
Room.belongsToMany(Subject, {
  through: "Program"
})
Subject.belongsToMany(Room, {
  through: "Program"
})

export default Program