import express from 'express';
import helmet from 'helmet';
import http from 'http';
import cookieParser from 'cookie-parser';
import router from './routes';
import mongoose from 'mongoose';
import './env';

//mongoDB setup
async function mongoInitialize() {
  //connect mongodb
  const mongoHost = `mongodb+srv://timosean:${process.env.MONGO_PW}@cluster0.1aoaj.mongodb.net/MiniBlackBoard?retryWrites=true&w=majority`;

  await mongoose.connect(mongoHost);

  console.log('Mongo Connected!');
}

//create app of express
async function expressLoader() {
  await mongoInitialize();

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
    res.status(404).json({ error: { message: 'URL Not Found' } });
  });

  return app;
}

async function createServer() {
  const app = await expressLoader();
  const httpServer = http.createServer(app);

  const port = process.env.PORT;
  httpServer.listen(port, () => {
    console.log(`server listening on ${port}✨`);
  });
}

createServer()
  .then(() => {
    console.log('Server Created!');
  })
  .catch((err) => {
    console.dir(err);
  });
