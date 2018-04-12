DROP TABLE IF EXISTS chat;
DROP TABLE IF EXISTS relationship;
DROP TABLE IF EXISTS user CASCADE;

CREATE TABLE user (
	user_id 			BIGINT(20) NOT NULL AUTO_INCREMENT,
	username 			VARCHAR(125) NOT NULL,
	email 				VARCHAR(125) NOT NULL,
	password 			VARCHAR(125) NOT NULL,
	image_path			VARCHAR(250) NOT NULL,
		PRIMARY KEY (user_id)
);

INSERT INTO musclr_chat.user VALUES(
1, 'Romeo', 'Romeo@mail.com', '123456', 'assets/images/users/Caprio.jpg'
);
INSERT INTO musclr_chat.user VALUES(
2, 'Julia', 'julia@mail.com', '123456', 'assets/images/users/default_pic_user.jpg'
);
INSERT INTO musclr_chat.user VALUES(
3, 'Arnold', 'arnold@mail.com', '123456', 'assets/images/users/Arnold.jpg'
);
INSERT INTO musclr_chat.user VALUES(
4, 'Kat', 'kat@mail.com', '123456', 'assets/images/users/Kat Dennings.jpg'
);
INSERT INTO musclr_chat.user VALUES(
5, 'Emma', 'emma@mail.com', '123456', 'assets/images/users/Emma Watson.jpg'
);
INSERT INTO musclr_chat.user VALUES(
6, 'Gal', 'gal@mail.com', '123456', 'assets/images/users/Gal Gadot.jpg'
);
INSERT INTO musclr_chat.user VALUES(
7, 'Jason', 'Jason@mail.com', '123456', 'assets/images/users/Jason Momoa.jpg'
);INSERT INTO musclr_chat.user VALUES(
8, 'Johnny', 'johnny@mail.com', '123456', 'assets/images/users/Johnny Depp.jpg'
);
INSERT INTO musclr_chat.user VALUES(
9, 'Tom', 'tom@mail.com', '123456', 'assets/images/users/Tom Hardy.jpg'
);

CREATE TABLE relationship (
    user_one_id 		BIGINT(20) NOT NULL,
    user_two_id 		BIGINT(20) NOT NULL,
    status				VARCHAR(100),
    action_user_id		BIGINT(20) NOT NULL
);

INSERT INTO musclr_chat.relationship VALUES(1, 2, 'accepted', 1);
INSERT INTO musclr_chat.relationship VALUES(1, 3, 'accepted', 3);
INSERT INTO musclr_chat.relationship VALUES(1, 4, 'accepted', 4);
INSERT INTO musclr_chat.relationship VALUES(1, 5, 'accepted', 5);
INSERT INTO musclr_chat.relationship VALUES(1, 6, 'accepted', 1);
INSERT INTO musclr_chat.relationship VALUES(1, 7, 'accepted', 1);
INSERT INTO musclr_chat.relationship VALUES(1, 8, 'accepted', 8);
INSERT INTO musclr_chat.relationship VALUES(1, 9, 'accepted', 9);
INSERT INTO musclr_chat.relationship VALUES(2, 3, 'accepted', 2);
INSERT INTO musclr_chat.relationship VALUES(2, 4, 'accepted', 4);
INSERT INTO musclr_chat.relationship VALUES(3, 5, 'accepted', 3);
INSERT INTO musclr_chat.relationship VALUES(1, 7, 'accepted', 1);

CREATE TABLE chat(
	chat_id 			BIGINT(20) NOT NULL AUTO_INCREMENT,
	user_from_id 		BIGINT(20) NOT NULL,
	user_to_id 			BIGINT(20) NOT NULL,
	message 			VARCHAR(250),
	send_on 			DATETIME NOT NULL,
		PRIMARY KEY (chat_id)
);
INSERT INTO musclr_chat.chat VALUES(1, 1, 2, 'hello', NOW());
INSERT INTO musclr_chat.chat VALUES(2, 2, 1, 'hola', NOW());
INSERT INTO musclr_chat.chat VALUES(3, 1, 2, 'bonjour', NOW());
INSERT INTO musclr_chat.chat VALUES(4, 1, 3, ' hello', NOW());






