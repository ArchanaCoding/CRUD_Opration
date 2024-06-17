const express = require('express');
const db = require('../dbconn');
const { response } = require('../app');
const router = express.Router();

// data and updating the user data

router.get("/edit/:id",(req,res) => {
  res.render("edit");
});


router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const { name, email, password } = req.body
  db.query(
    'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
    [name, email, password, id])
    .then(() => {
      res.status(200).send(`User modified with ID: ${id}`)
      res.redirect('/edit/:id');
    })

    .catch(err => {
      console.log(err,"error while updating user")
    })
  })


  // router.get("/edit/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   db.query('SELECT * FROM users WHERE id = $1', [id])
//   .then((result) => {
//       if (result.rows.length > 0) {
//         const element = result.rows[0];
//         res.render("edit", { element });
//       } else {
//         res.status(404).send("User not found");
//       }
//     })
//   .catch((err) => {
//       console.log(err, "error while fetching user");
//     });
// });

module.exports = router;








// modified code for the edit route that fetches the user data from the database and pre-fills the edit form with the existing user data:

// fill the form fields with the existing user data.

//However, since the router.get('/edit/:id', (req, res) => {...}) route is defined as a GET route, it will not receive the updated user data. To fix this, you need to define a separate POST route to handle the form submission and update the user data in the database