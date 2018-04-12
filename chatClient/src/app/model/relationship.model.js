"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Relationship = (function () {
    function Relationship(user_one_id, user_two_id, status, action_user_id) {
        this.user_one_id = user_one_id;
        this.user_two_id = user_two_id;
        this.status = status;
        this.action_user_id = action_user_id;
    }
    return Relationship;
}());
exports.Relationship = Relationship;
