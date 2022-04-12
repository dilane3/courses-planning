import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database.js';
import Class from './class.js';
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

// Relation between Subject and Class
Subject.belongsTo(Class, {
  foreignKey: {
    type: DataTypes.INTEGER
  }
})
Class.hasOne(Subject)

// Relation between Subject and Speciality
Subject.belongsTo(Speciality, {
  foreignKey: {
    type: DataTypes.INTEGER
  }
})
Speciality.hasOne(Subject)

export default Subject