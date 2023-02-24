import express from 'express';
import path from 'path';

import { routes as UIRoutes } from './ui.js';
import { addRoutes } from './api.js';

export function generateRoutes(app) {
  const staticDirectory = path.join('..', 'client', 'dist');

  console.log(UIRoutes, staticDirectory)
  
  const UIRouter = express.static(staticDirectory);
  UIRoutes.forEach(route => {
    console.log(route);
    app.use(route, UIRouter)
  });

  addRoutes(app);
}