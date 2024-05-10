import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('taskManager', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;