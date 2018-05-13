let express = require('express');
let Dao = require('../dao/ChatDao');

//Creating Router() object
let chat = express.Router();

chat.post('/', function (req, res, next) {
    let user_from_name = req.body.user_from_name;
    let user_to_name = req.body.user_to_name;
    let message = req.body.message;

    Dao.sendMessage(user_from_name, user_to_name, message, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    })
});

chat.get('/:me/:friend', function (req, res, next) {
    Dao.getMessages(req.params.me, req.params.friend, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});

chat.get('/:me', function (req, res, next) {
    Dao.getLastMessagesByUsername(req.params.me, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});

module.exports = chat;