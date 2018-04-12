let db = require('../dbconnection');

let User = {
    addUser: function (username, email, password, image_path, callback) {
        return db.query("INSERT INTO user (username, email, password, image_path) VALUES (?,?,?,?)", [username, email, password, image_path], callback);
    },
    getAllUsers: function (callback) {
        return db.query("SELECT * FROM user", callback);
    },
    getUserByNameAndPassword: function (username, password, callback) {
        return db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], callback);

    },
    getUserById: function (id, callback) {
        return db.query("SELECT * FROM user WHERE user_id = ?", [id], callback);
    },
    deleteUserById: function (id, callback) {
        return db.query("DELETE FROM user WHERE user_id = ?", [id], callback);
    },
    updateUserById: function (username, email, password, image_path, id) {
        return db.query("UPDATE user SET username = ? , email = ?, password = ?  image_path = ? WHERE user_id = ?", [username, email, password, image_path, id], callback);

    }
};
module.exports = User;