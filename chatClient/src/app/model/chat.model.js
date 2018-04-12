"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chat = (function () {
    function Chat(chat_id, user_from_id, user_to_id, message, sent_on) {
        this.chat_id = chat_id;
        this.user_from_id = user_from_id;
        this.user_to_id = user_to_id;
        this.message = message;
        this.sent_on = sent_on;
    }
    return Chat;
}());
exports.Chat = Chat;
