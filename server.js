const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const uuidV4 = require('uuid').v4;
const authRoutes = require('./routes/auth.routes');

const app = express();

const store = MongoStore.create({
  mongoUrl: process.env.DB_URI,
  stringify: false,
  autoRemove: 'interval',
  autoRemoveInterval: 0,
});

app.use(express.json());

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
      maxAge: 20000,
    },
  }),
);

app.use('/auth', authRoutes);

module.exports = app;
