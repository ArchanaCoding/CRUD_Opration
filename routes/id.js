// const express = require('express');
// const db = require('../dbconn');
// const { response } = require('../app');
// const router = express.Router();

// router.get("/edit/:id", (req, res) => {
//   res.redirect(`/users/${req.params.id}`);
// });


// router.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   db.query('SELECT * FROM users WHERE id = $1', [id])
//     .then((result) => {
//       if (result.rows.length > 0) {
//         const element = result.rows[0];
//         res.render("edit", { element });
//       } else {
//         res.status(404).send("User not found");
//       }
//     })
//     .catch((err) => {
//       console.log(err,"error while fetching user");
//     });
// });

// module.exports = router;