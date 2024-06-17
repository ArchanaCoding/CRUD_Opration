var express = require('express');
const db = require('../dbconn');
const router = express.Router();



/* GET users listing. */
router.get('/users', function (req, res, next) {

   db.query('SELECT * FROM users').then((allDataList) => {
    res.render('users', {data : allDataList})
    // res.status(200).json({
    // message: 'Retrieved users',
    // data : allDataList
    // })
  })
})

module.exports = router;


























































/* GET users listing. */
// router.get('/users', function (req, res, next) {

//   db.query('SELECT * FROM users').then((allDataList) => {
//    res.status(200).json({
//    message: 'Retrieved users',
//    data : allDataList
//    })
//  })
// })



// module.exports = router;







//To query the database for a specific user by ID:
// router.get('/:id', function(req, res, next) {
//   const id = req.params.id;
//   db.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
//     if (err) throw err;
//     if (results.length > 0) {
//       res.json(results[0]);
//     } else {
//       res.send('User not found');
//     }
//   });
// });




//To query the database for all users with a specific email address:

// router.get('/email/:email', function(req, res, next) {
//   const email = req.params.email;
//   db.query('SELECT * FROM users WHERE email = $1', [email], (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });




// To query the database for all users with a specific name:
// router.get('/name/:name', function(req, res, next) {
//   const name = req.params.name;
//   db.query('SELECT * FROM users WHERE name = $1', [name], (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });