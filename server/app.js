require('dotenv').config()
const { sequelize } = require('./db/config');
const express = require('express');
const app = express(),
      port = process.env.PORT,
      front_host = process.env.API_FRONT,
      bodyParser = require("body-parser"),
      cors = require('cors'),
      session = require('express-session'),
      cookieParser = require("cookie-parser"),
      homeRouter = require('./routes/home'),
      userRouter = require('./routes/user')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: front_host }));

app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
}));

// Route home
app.use('/', homeRouter);

// Route utilisateur
// app.use('/user/', userRouter);

sequelize.authenticate().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on the port:${port}`);
    });
}).catch((error) => {
    console.log('Impossible de se connecter à la DB');
})