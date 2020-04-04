import 'reflect-metadata'
import {createConnection} from 'typeorm'
import {ConnectionOptions} from 'typeorm'
import {Request, Response} from 'express'
import express from 'express'
import * as bodyParser from 'body-parser'
import * as dbconfig from './config/TypeORM'
import { Server } from './Server'
import { config as dotenv } from "dotenv"

dotenv()

createConnection(dbconfig).then(async (connection: any) => {

  const server = new Server()
  server.start(Number(process.env.PORT))

}).catch((error: any) => console.log("TypeORM connection error: ", error));