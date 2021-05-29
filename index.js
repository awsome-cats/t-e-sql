const express = require('express');
const mysql = require('mysql2');
const app = express();


const port = process.env.PORT ||5000


// db.connect((error) => {
//   if (error) {
//     console.log('error', error);
//   }else {
//     console.log('データベースに接続しました')
//   }
// })


app.get('/', (req, res) => {
  res.send({
    message: 'Try heroku deploy'
  })
})


app.listen(port, () => {
    console.log('server is running')
})
