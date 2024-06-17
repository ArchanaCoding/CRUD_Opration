const express = require('express');
const db = require('../dbconn');
const router = express.Router();


router.post('/delete', async (req,res) => {
    const {id}  = req.body;
    console.log(req.body)
    try {
        const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.send(200).send({message: "user deleted successfully"})
    } catch (error) {
        console.log(error, 'delete')
    }
})


module.exports = router;














