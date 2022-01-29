import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import aulasRoutes from './routes/aulasRoutes';
import moduloRoutes from './routes/moduloRoutes';
import tokenRoutes from './routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/aulas/', aulasRoutes);
    this.app.use('/modulos/', moduloRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
