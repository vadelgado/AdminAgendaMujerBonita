import { Sequelize } from "sequelize";


const sequelize = new Sequelize("bonitapeluqueria", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;