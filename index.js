const express = require('express');
const mysql = require('mysql2');
const app = express();
const indexRoutes = require('./routes/books')
const config = require('./config/config')


const db = mysql.createConnection(config)
const port = process.env.PORT ||5000


db.connect((error) => {
  if (error) {
    console.log('error', error);
  }else {
    console.log('データベースに接続しました')
  }
})

app.use('/', indexRoutes)


app.listen(port, () => {
    console.log('server is running')
})
