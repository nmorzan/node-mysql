"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//controladores
const usuarios_1 = require("../controllers/usuarios");
const db_validators_1 = require("../middlewares/db-validators");
router.post('/', [], usuarios_1.crearUsuario);
router.get('/', [], usuarios_1.getUsuarios);
router.get('/:id', [], usuarios_1.getUsuario);
router.put('/:id', [db_validators_1.usuarioExisteByMail], usuarios_1.actualizarUsuario);
router.delete('/:id', [], usuarios_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.js.map