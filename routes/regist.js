const express = require('express');
const db = require('../dbconn');
const router = express.Router();



router.get("/regist",(req,res) => {
    res.render("regist");
});

router.post('/regist', async (req, res) => {
    const { name, email, password } = req.body; // extract all name html

    try {
       const userAllReadyExit = await db.query('SELECT email FROM users WHERE email = $1', [email]);
       
       if(userAllReadyExit.length > 0){
        res.send("allredy exiting")
       }
       else if (!name || !email || !password)
       {
           res.send("all  filleds requires");
       }
       else if (password.length < 6)
       {
        res.send("password must be 6 charecter");
       }
       else{ 
        const inserUsers =  await db.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
        console.log(inserUsers)
        res.redirect('login');
        req.users
        

    }
    } 
    catch (error) {
        console.log(error);
        res.render('regist', {error: 'Invalid email or password. Please try again.'});
    }
});


  module.exports = router














