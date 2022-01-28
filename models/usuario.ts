//idusuarios usuario password status email
import { DataTypes } from 'sequelize';
import db from '../database/dbconection';

const Usuario = db.define('Usuario',{
  usuario:{
    type: DataTypes.STRING,
  },
  password:{
    type: DataTypes.STRING,
  },
  email:{
    type: DataTypes.STRING,
  },
  status:{
    type: DataTypes.BOOLEAN,
  }
});

export default Usuario;
