import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import http from 'http';
import cookieParser from 'cookie-parser';

//create app of express
function expressLoader() {
  const app = express();
  app.use(helmet());

  //parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  return app;
}

function createServer() {
  const app = expressLoader();
  const httpServer = http.createServer(app);

  app.get('/', (req, res) => {
    res.send('hi!');
  });

  httpServer.listen(8080, () => {
    console.log('server listening on 8080✨');
  });
}

createServer();
