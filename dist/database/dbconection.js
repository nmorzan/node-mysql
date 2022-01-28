"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('nodejs', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql',
    //logging:false   esto la mayori lo pone en false ya que por defecto muestra lo que impacata en la base de datos
});
exports.default = db;
//# sourceMappingURL=dbconection.js.map