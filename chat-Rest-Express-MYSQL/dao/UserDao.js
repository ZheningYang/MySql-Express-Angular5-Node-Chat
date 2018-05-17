let db = require('../dbconnection');

let User = {
    addUser: function (username, email, password, image, callback) {
        return db.query("INSERT INTO user (username, email, password, image) VALUES (?,?,?,?)", [username, email, password, image], callback);
    },
    getAllUsers: function (callback) {
        return db.query("SELECT * FROM user", callback);
    },
    getUserByNameAndPassword: function (username, password, callback) {
        return db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], callback);

    },
    getUserById: function (id, callback) {
        return db.query("SELECT * FROM user WHERE _id = ?", [id], callback);
    },
    deleteUserById: function (id, callback) {
        return db.query("DELETE FROM user WHERE _id = ?", [id], callback);
    },
    updateUserById: function (username, email, password, image, id) {
        return db.query("UPDATE user SET username = ? , email = ?, password = ?  image = ? WHERE _id = ?", [username, email, password, image, id], callback);

    }
};
module.exports = User;