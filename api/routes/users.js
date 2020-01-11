const { Router } = require('express')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  User.find({}, (err, data) => {
    if (err) console.log(err)
    res.json(data)
  })
})

/* GET user */
router.get('/user', auth, async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.json(user);
})

/* Login */
router.post('/login',
  async (req, res, next) => {
    const {
      name,
      password
    } = req.body;

    await User.find({
      name,
      password
    }, (err, data) => {
      if (err) console.log(err)
      jwt.sign(
        {
          user: {
            id: data[0]._id
          }
        },
        "secret", {
        expiresIn: 10000
      },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            name,
            token
          });
        }
      );
      // res.json(data)
    })

  }
)

/* Logout */
router.post('/logout', (req, res, next) => {
  res.sendStatus(200)
})
/* POST user */
router.post('/users', function (req, res, next) {
  const createUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  // res.json('success')
  createUser.save()
    .then(() => {
      res.json(req.body)
    })
    .catch(err => {
      res.sendStatus(404).send(err)
    })
})

module.exports = router