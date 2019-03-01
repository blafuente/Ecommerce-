var express = require('express');
var router = express.Router();
const db = require('../database');

// /cart/getCart
router.post('/getCart',(req,res)=>{
    // res.json("test");
    const token = req.body.token;
    const getUser = `SELECT id FROM users WHERE token = $1  `
    db.query(getUser, [token]).then((results)=>{
        if(results.length === 0){
            // this is a bad token. User is either confused or a liar or a location
            res.json({
                msg: "badToken"
            })
        }else{
            const uid = results[0].id;

        }
    }).catch((error)=>{
        if(error){throw error;}
    })
})

module.exports = router;

