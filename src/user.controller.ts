import { Request, Response, Router } from 'express';
import { UserService } from './services/user.service';

export class UserController {
  public router = Router();

  constructor(private userService: UserService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get('/', this.sayHello);
  }

  private sayHello = (req: Request, res: Response) => {
    const message = this.userService.getMessage();
    res.send('user GET/ route' + message);
  };
}
