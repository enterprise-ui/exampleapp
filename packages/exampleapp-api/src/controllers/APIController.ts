import { Request, Response } from 'express'
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core'
import { getManager } from 'typeorm'

@Controller('api')
export class APIController {
   
  @Get('')
  private async get(req: Request, res: Response) {
    res.status(200).json({
        msg: 'Hello world'
      })
  }
}