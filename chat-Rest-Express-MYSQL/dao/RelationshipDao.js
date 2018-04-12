let db = require('../dbconnection');

let Relationship = {
    sendFriendRequest: function (user_one_id, user_two_id, callback) {
        return db.query("INSERT INTO relationship (user_one_id, user_two_id, status, action_user_id) VALUES (?, ?, 'pending', ?)", [user_one_id, user_two_id, user_one_id], callback);
    },

    acceptFriendRequest: function (user_two_id, user_one_id, callback) {
        return db.query("UPDATE relationship SET status = 'accepted', action_user_id = ? WHERE user_one_id = ? AND user_two_id = ?", [user_two_id, user_one_id, user_two_id], callback);
    },

    getFriendsListByUserId: function (id, callback) {
        return db.query(
            "SELECT DISTINCT " +
                "u.user_id, u.username, u.email, u.password, u.image_path " +
            "FROM " +
            "relationship r " +
                "INNER JOIN " +
            "user u ON u.user_id IN (SELECT " +
                "CASE " +
                    "WHEN user_one_id <> ? " +
                    "THEN user_one_id " +
                    "ELSE user_two_id " +
                "END " +
            "FROM " +
                "relationship r " +
            "WHERE " +
                "(user_one_id = ? OR user_two_id = ?) " +
                    "AND status = 'accepted')", [id, id, id], callback);
    },

};
module.exports = Relationship;