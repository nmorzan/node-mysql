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
exports.usuarioExisteByMail = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const usuarioExisteByMail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { email } = req.body;
    try {
        const [usuarioById, usuarioByEmail] = yield Promise.all([
            usuario_1.default.findByPk(id),
            usuario_1.default.findOne({ where: { email } })
        ]);
        console.log("Hola");
        console.log(usuarioById);
        next();
    }
    catch (error) {
    }
});
exports.usuarioExisteByMail = usuarioExisteByMail;
//# sourceMappingURL=db-validators.js.map