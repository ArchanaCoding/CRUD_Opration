const express = require('express');
const db = require('../dbconn');
const router = express.Router();

router.get("/login",(req,res) => {
    res.render("login");
}); 

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userAllReadyExit = await db.query('SELECT * FROM users WHERE email = $1', [email]);

       
           if (!email || !password)
           {
               res.send("all  filleds requires");
           }
           else if (password.length < 6)
           {
            res.send("password must be 6 charecter");
           }
           else if (userAllReadyExit.length <= 0) 
           {
            res.send("email is not registred")
           }
           else{
            const user = await db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
            res.redirect('/users');
           }  
    } 
    catch (error) {
        console.log(error);
        res.render('login', {error: 'Invalid email or password. Please try again.'});
    }
})
  


module.exports = router;













