var express = require('express');
var router = express.Router();

const User = require('../models/users')
const multer = require('multer');

const store = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.originalname}`)
  },
})
const uploadDisplayPic = multer({ storage: store })

/* GET home page. */
router.get('/', async function (req, res, next) {
  const userdata = await User.find()
  res.render('index', { title: 'Register', user: userdata });
});

router.post('/register', uploadDisplayPic.single('displaypic'), async (req, res, next) => {
  const { firstname, lastname, email } = req.body
  const picPath = `/images/${req.file.filename}`
  const newUser = new User({
    firstname,
    lastname,
    email,
    displaypicture: picPath
  })

  await newUser.save()
  res.json(newUser)
})

module.exports = router;
