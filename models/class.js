import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";
import Faculty from "./faculty.js";
import Level from "./level.js";

// Create Class model
class Class extends Model {}

// Initialization of the structure
Class.init({
  idClasse: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomClasse: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: "Class",
  tableName: 'classe'
})

// Relation between Class and Faculty
Class.belongsTo(Faculty, {
  foreignKey: {
    type: DataTypes.INTEGER,
    name: "idFil"
  }
})
Faculty.hasMany(Class)

// Relation between Class and Level
Class.belongsTo(Level, {
  foreignKey: {
    type: DataTypes.INTEGER,
    name: "idNiv"
  }
})
Level.hasMany(Class)

export default Class