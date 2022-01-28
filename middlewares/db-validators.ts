import { NextFunction, Request, Response } from "express";
import Usuario from "../models/usuario";


export const usuarioExisteByMail = async(req:Request, res:Response, next:NextFunction)=>{
  const { id } = req.params;
  const { email } = req.body;
  
  try {

    const [usuarioById, usuarioByEmail]= await Promise.all([
      Usuario.findByPk(id),
      Usuario.findOne({where:{email}})
    ])
    console.log("Hola")
    console.log(usuarioById)
    next()
  } catch (error) {
    
  }
}