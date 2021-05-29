var express = require('express');
var router  = express.Router();
const mysql = require('mysql2');
const config = require('../config/config.js')


const db = mysql.createConnection(config)



const getBooks = async (req, res, next) => {
    try {

        const sql = 'select * from Books'

        await db.query(sql, (err, result) => {
            if(err) {
                console.log(err)
            }else {
                res.send({
                    status: 1,
                    success:true,
                    result
                })
            }
        })

    }catch(error) {
        console.log(error)
    }
}

router.get('/', getBooks)


module.exports = router;
