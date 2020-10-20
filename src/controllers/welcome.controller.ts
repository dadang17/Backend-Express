import express, { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'

class WelcomeController implements IControllerBase {
  public path = '/'
  public router = express.Router()

  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get('/', this.index)
  }

  private async index(req: Request, res: Response) {
    res.json({
      success: true,
      message: 'Welcome to API v1'
    })
  }
}

export default WelcomeController