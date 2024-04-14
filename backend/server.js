import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.js';
import auth from './middlewares/auth.js';
import dashboardRouter from './routers/dashboard-routers.js';

import db from './db/index.js';

db.connect();
db.sync();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger);

app.use('/', auth, dashboardRouter);



app.get('/', auth, (req, res) => {
  res.send({msg: 'Hello World get'});
});

app.post('/', auth, (req, res) => {
  let data = req.body;
  console.log(data);
  res.send({msg: `Data is: ${data.msg}`});
});

app.post('/login', (req, res) => {
  let data = req.body; // {username: 'admin', password: 'password'}
  if (data.username === 'admin' && data.password === 'password') {
    res.status(200).send({msg: 'Login success', token: '1234'});
  } else {
    res.status(401).send({msg: 'Login failed', token: ''});
  }
});



app.listen(port, () => {
  console.log('Server is running on port ', port);
});