import { Sequelize } from "sequelize";
const db = new Sequelize('nodejs','root','12345',{
  host:'localhost',
  dialect:'mysql',
  //logging:false   esto la mayori lo pone en false ya que por defecto muestra lo que impacata en la base de datos
});

export default db;