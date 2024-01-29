var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini message board', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post("/new", (req, res, next) => {
  const {author, message} = req.body;

  if(!author || !message){
    return res.status(400).send("Author and message are required");
  }

  messages.push({
    text: message, 
    user: author, 
    added: new Date()
  });

  res.redirect("/")
})

module.exports = router;
