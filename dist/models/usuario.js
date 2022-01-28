"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//idusuarios usuario password status email
const sequelize_1 = require("sequelize");
const dbconection_1 = __importDefault(require("../database/dbconection"));
const Usuario = dbconection_1.default.define('Usuario', {
    usuario: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map