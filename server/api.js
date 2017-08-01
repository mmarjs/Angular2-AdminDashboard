const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('api works!');
});

router.post('/login', (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    if (email == 'admin' && password == 'admin123') {
        res.status(200).send({token: 'fake-token'});
    } else {
        res.status(404).send('error');
    }
});

module.exports = router;