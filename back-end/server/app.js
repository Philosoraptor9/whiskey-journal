import dotenv from 'dotenv';

import express from 'express';
import next from 'next';

import mongoose from 'mongoose';

import session from 'express-session';
import mongoSessionStore from 'connect-mongo';

import User from './models/User';

import auth from './google';
import logger from './logs';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const MONGO_URL = process.env.MONGO_URL_TEST;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(
  MONGO_URL,
  options,
);

const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhost:${port}`;

const app = next({ dev });
const handle = app.getRequestHandler();

const api = require('./api');

const URL_MAP = {
  '/login': '/public/login',
};

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  const MongoStore = mongoSessionStore(session);

  const sess = {
    name: 'builderbook.sid',  // change for final version
    secret: 'HD2w.)q*VqRT4/#NK2M/,E^B)}FED5fWU!dKe[ph',
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 3 * 24 * 60 * 60,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    },
  };
  
  server.use(session(sess));

  auth({ server, ROOT_URL })

  api(server);

  server.get('*', (req, res) => {
    const url = URL_MAP[req.path];
    if (url){
      app.render(req, res, url);
    } else {
    handle(req, res)
  }
});

  server.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`); 
  });
});





