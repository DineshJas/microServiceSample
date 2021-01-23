const router = require('express').Router();

const registration = require('./controllers/registrationController');

router.get('/', (req, res) => {
    res.json({
        message: 'response from service one'
    })
});

router.post('/signup', registration.newUser);

module.exports = router;