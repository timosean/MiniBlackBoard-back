import express from 'express';
import helmet from 'helmet';
import http from 'http';
import cookieParser from 'cookie-parser';
import router from './routes';

//create app of express
function expressLoader() {
  const app = express();
  app.use(helmet());

  //parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  //router
  app.use(router);

  //404 Error Handling
  app.all('*', (_, res) => {
    res.status(404).json({ success: false });
  });

  return app;
}

function createServer() {
  const app = expressLoader();
  const httpServer = http.createServer(app);

  const port = 8080;
  httpServer.listen(port, () => {
    console.log(`server listening on ${port}✨`);
  });
}

createServer();
