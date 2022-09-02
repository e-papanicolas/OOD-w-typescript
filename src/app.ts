import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import 'dotenv/config';

import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
    this, this.setDBConfig();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    this.app.use(cors());
    this.app.use(logger('dev'));
  }

  private setControllers() {
    const userController = new UserController(new UserService());
    this.app.use('/user', userController.router);
  }

  private setDBConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () =>
      console.log(`Connected to mongoDB at ${process.env.MONGO_URI}`)
    );
    mongoose.set('toJSON', {
      virtuals: true,
      transform: (_: any, converted: any) => {
        delete converted._id;
      }
    });
  }
}

export default new App().app;
