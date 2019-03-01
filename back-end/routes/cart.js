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

// /cart/updateCart
router.post('/updateCart',(req,res)=>{
    // res.json("test");
    console.log(req.body)
    const token = req.body.token;
    const itemId = req.body.itemId
    const getUser = `SELECT id FROM users WHERE token = $1  `
    db.query(getUser, [token]).then((results)=>{
        if(results.length === 0){
            // this is a bad token. User is either confused or a liar or a location
            res.json({
                msg: "badToken"
            })
        }else{
            // this is a legit token. I know what user this is
            const uid = results[0].id;
            const addToCartQuery = `INSERT INTO cart (uid,gid,date)
                VALUES
                ($1,$2,NOW()) `
            db.query(addToCartQuery,[uid,itemId]).then(()=>{
                const getCartTotals = `SELECT * FROM cart WHERE uid = $1 `
                db.query(getCartTotals,[uid]).then((results)=>{
                    res.json(results)
                }).catch((error)={
                    if(error){throw error;}
                })
            }).catch((error)=>{
                if(error){throw error;}
            })
        }
    }).catch((error)=>{
        if(error){throw error;}
    })
})

module.exports = router;

