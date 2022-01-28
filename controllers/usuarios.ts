import { Request, Response } from "express";

import Usuario from "../models/usuario";

export const getUsuarios = async(req:Request, res:Response)=>{

  try {
    const usuarios = await Usuario.findAll();
    if(!usuarios.length){
      return res.status(404).json({
        msg:`No existen datos en esta tabla de usuarios`
      })
    }
    return res.status(200).json({
      usuarios
    })
  } catch (error) {
    console.log(error)

   return res.status(500).json({
     msg:"Hay un error en la obtencion de los usuarios, hable con su administrador"
   }) 
  }
}

export const getUsuario = async(req:Request, res:Response)=>{
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);

    if(!usuario){
      return res.status(404).json({
        msg:`No existe usuarios con el id ${id}`
      })
    }
    return res.status(200).json({
      usuario
    })
  } catch (error) {
   return res.status(500).json({
     msg:"Hay un error en la obtencion de los usuario, hable con su administrador"
   }) 
  }
}

export const crearUsuario = async(req:Request, res:Response)=>{
  const { usuario, password, email } = req.body;
  try {

    const usuarioExiste = await Usuario.findOne({
      where: {
        email
      }
    });

    if(usuarioExiste){
      return res.status(400).json({
        msg:`Ya existe un usuario con ese email: ${email}`
      })
    }

    const nuevoUsuario = await Usuario.create({ usuario, password, email })
    return res.status(200).json({
      nuevoUsuario
    })
  } catch (error) {
    console.log(error)
   return res.status(500).json({
     msg:"Hay un error en la obtencion de los usuario, hable con su administrador"
   }) 
  }
}

export const actualizarUsuario = async(req:Request, res:Response)=>{
  const { usuario, password,email } = req.body;
  const { id } = req.params;

  try {


    const usuarioUpdate = await Usuario.update({ usuario:usuario }, {
      where: {
        id: id
      }
    });
    return res.status(200).json({
      usuarioUpdate
    })

  } catch (error) {
   return res.status(500).json({
     msg:"Hay un error en la obtencion de los usuario, hable con su administrador"
   }) 
  }
}

export const eliminarUsuario = (req:Request, res:Response)=>{
  const { id } = req.params;

  try {
    
    return res.status(200).json({
      msg:"Eliminar usuarios",
      id
    })

  } catch (error) {
   return res.status(500).json({
     msg:"Hay un error en la obtencion de los usuario, hable con su administrador"
   }) 
  }
}