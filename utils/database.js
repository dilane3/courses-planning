import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize