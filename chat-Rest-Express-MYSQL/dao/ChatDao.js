let db = require('../dbconnection');

let Chat = {
    sendMessage: function (user_from_name, user_to_name, message, callback) {
        return db.query("INSERT INTO chat (user_from_name, user_to_name, message, send_on) VALUES (?, ?, ?, ?)", [user_from_name, user_to_name, message, new Date()], callback);
    },
    getMessages: function (me, friend, callback) {
        return db.query("SELECT * FROM chat " +
            "WHERE " +
            "(user_from_name = ? AND user_to_name = ?) " +
            "OR " +
            "(user_from_name = ? AND user_to_name = ?) " +
            "ORDER BY send_on asc", [me, friend, friend, me], callback);
    },
    getMessageById: function (id, callback) {
        return db.query("SELECT * FROM chat WHERE chat_id = ?", [id], callback);
    },
    getLastMessagesByUsername: function (me, callback) {
        return db.query("SELECT " +
            "temp.chat_id," +
            "temp.user_from_name," +
            "temp.user_to_name," +
            "temp.message," +
            "temp.send_on " +
            "FROM " +
            "(SELECT " +
            "CASE " +
            "WHEN c.user_from_name <> ? THEN c.user_from_name " +
            "ELSE c.user_to_name " +
            "END AS id," +
            "c.chat_id," +
            "c.user_from_name," +
            "c.user_to_name," +
            "c.message," +
            "c.send_on " +
            "FROM " +
            "musclr_chat.chat c " +
            "ORDER BY c.send_on DESC) as temp " +
            "group by temp.id ", [me], callback);
    },
};
module.exports = Chat;