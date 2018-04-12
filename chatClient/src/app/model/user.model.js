"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(user_id, username, email, password, image_path) {
        this.user_id = user_id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.image_path = image_path;
    }
    return User;
}());
exports.User = User;
