"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.crearUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_1.default.findAll();
        if (!usuarios.length) {
            return res.status(404).json({
                msg: `No existen datos en esta tabla de usuarios`
            });
        }
        return res.status(200).json({
            usuarios
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Hay un error en la obtencion de los usuarios, hable con su administrador"
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe usuarios con el id ${id}`
            });
        }
        return res.status(200).json({
            usuario
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: "Hay un error en la obtencion de los usuario, hable con su administrador"
        });
    }
});
exports.getUsuario = getUsuario;
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, password, email } = req.body;
    try {
        const usuarioExiste = yield usuario_1.default.findOne({
            where: {
                email
            }
        });
        if (usuarioExiste) {
            return res.status(400).json({
                msg: `Ya existe un usuario con ese email: ${email}`
            });
        }
        const nuevoUsuario = yield usuario_1.default.create({ usuario, password, email });
        return res.status(200).json({
            nuevoUsuario
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Hay un error en la obtencion de los usuario, hable con su administrador"
        });
    }
});
exports.crearUsuario = crearUsuario;
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, password, email } = req.body;
    const { id } = req.params;
    try {
        const usuarioUpdate = yield usuario_1.default.update({ usuario: usuario }, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            usuarioUpdate
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: "Hay un error en la obtencion de los usuario, hable con su administrador"
        });
    }
});
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (req, res) => {
    const { id } = req.params;
    try {
        return res.status(200).json({
            msg: "Eliminar usuarios",
            id
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: "Hay un error en la obtencion de los usuario, hable con su administrador"
        });
    }
};
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=usuarios.js.map