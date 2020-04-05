import { resolve } from 'path'
import 'reflect-metadata'
import { config as dotenv } from 'dotenv'
import {createConnection} from 'typeorm'
import {ConnectionOptions} from 'typeorm'
import {Request, Response} from 'express'
import express from 'express'
import * as bodyParser from 'body-parser'
import { Server } from './Server'

dotenv({ path: resolve(__dirname, `../.env.${process.env.NODE_ENV}`) })
// After dotenv initialization
import * as dbconfig from './config/TypeORM'

createConnection(dbconfig).then(async (connection: any) => {

  const server = new Server()
  server.start(Number(process.env.PORT))

}).catch((error: any) => console.log("TypeORM connection error: ", error));