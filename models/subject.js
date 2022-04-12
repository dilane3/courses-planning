import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database.js';
import Room from './room.js';
import Speciality from './speciality.js';


// Create the model
class Subject extends Model {}

Subject.init({
  idCours: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  libelle: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'Subject',
  tableName: 'cours',
  timestamps: false
});

// Relation between Subject and Room
Subject.belongsTo(Room, {
  foreignKey: {
    type: DataTypes.INTEGER,
    name: "idClasse"
  }
})
Room.hasOne(Subject)

// Relation between Subject and Speciality
Subject.belongsTo(Speciality, {
  foreignKey: {
    type: DataTypes.INTEGER,
    name: "idSpec"
  }
})
Speciality.hasOne(Subject)

export default Subject