const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// partie Rest Mysql
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT, PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-authorization');
    res.header('Access-Control-Expose-Headers', 'x-authorization');
    next();
});

let routerUser = require('./routes/UserRoute');
let routerRelationship = require('./routes/RelationshipRoute');
let routerChat = require('./routes/ChatRoute');


// Tell express to use this router with /api before.
// You can put just '/' if u don't want any sub path before routes
app.use("/user", routerUser);
app.use("/relationship", routerRelationship);
app.use("/chat", routerChat);

// serveur du rest http://localhost:3000
// app.listen(3000, function () {
//     console.log("Live at Port 3000");
// });


// partie socket
let http = require('http').Server(app);
// let io = require('socket.io')(http);
//
// io.on('connection', (socket) => {
//     console.log('user connected');
//
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
//
//     socket.on('add-message', (message) => {
//         io.emit('message', {type: 'new-message', text: message});
//     });
// });

// serveur du socket http://localhost:5000
http.listen(5000,"0.0.0.0", function () {
    console.log('started on port 5000');
});