import { Router } from 'express';
const router = Router();
//controladores
import { actualizarUsuario, crearUsuario, eliminarUsuario, getUsuario, getUsuarios } from '../controllers/usuarios';
import { usuarioExisteByMail } from '../middlewares/db-validators';


router.post('/',[],crearUsuario);
router.get('/',[],getUsuarios);
router.get('/:id',[],getUsuario);
router.put('/:id',[usuarioExisteByMail],actualizarUsuario);
router.delete('/:id',[],eliminarUsuario);



export default router;