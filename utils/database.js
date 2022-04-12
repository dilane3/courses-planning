import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: '../db.sqlite'
// })

export default sequelize