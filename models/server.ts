import express, {Application} from 'express';
import cors from 'cors';
import  userRoutes from '../routes/usuarios';
import db from '../database/dbconection';


export default class Server{
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: '/api/usuarios'
  }
  

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '8000';   //para solucionar el problema de que port puede ser string || undefined

    //base de datos
    this.conectarDB();
    //middlewares
    this.middlewares()
    //rutas
    this.routes()
  }

  listen(){
    this.app.listen(this.port,()=>{
      console.log(`Servidor escuchando en el puerto ${this.port}`)
    })
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'))

  }

  routes(){
    this.app.use(this.apiPaths.usuarios,userRoutes)
  }

  async conectarDB(){
    try {
      await db.authenticate();
      console.log("Conectados a la base de datos")
    } catch (error) {
      throw new Error(`Error en la conexion de la base de dato : ${error}`)
    }
  }
}

