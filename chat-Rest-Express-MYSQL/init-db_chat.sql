DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS chat;
DROP TABLE IF EXISTS relationship;
DROP TABLE IF EXISTS user CASCADE;

CREATE TABLE user (
	_id 			    BIGINT(20) NOT NULL AUTO_INCREMENT,
	username 			VARCHAR(125) NOT NULL,
	email 				VARCHAR(125) NOT NULL,
	password 			VARCHAR(125) NOT NULL,
	image_path			VARCHAR(250) NOT NULL,
		PRIMARY KEY (_id)
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
    user_one_name 		VARCHAR(125) NOT NULL,
    user_two_name 		VARCHAR(125) NOT NULL,
    status				VARCHAR(100),
    action_user_name	VARCHAR(125) NOT NULL
);

INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Julia', 'accepted', 'Romeo');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Arnold', 'accepted', 'Arnold');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Kat', 'accepted', 'Kat');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Emma', 'accepted', 'Emma');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Gal', 'accepted', 'Romeo');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Jason', 'accepted', 'Romeo');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Johnny', 'accepted', 'Johnny');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Tom', 'accepted', 'Tom');
INSERT INTO musclr_chat.relationship VALUES('Julia', 'Arnold', 'accepted', 'Julia');
INSERT INTO musclr_chat.relationship VALUES('Julia', 'Kat', 'accepted', 'Kat');
INSERT INTO musclr_chat.relationship VALUES('Arnold', 'Emma', 'accepted', 'Arnold');
INSERT INTO musclr_chat.relationship VALUES('Romeo', 'Jason', 'accepted', 'Romeo');

CREATE TABLE chat(
	chat_id 			BIGINT(20) NOT NULL AUTO_INCREMENT,
	user_from_name 		VARCHAR(125) NOT NULL,
	user_to_name 		VARCHAR(125) NOT NULL,
	message 			VARCHAR(250),
	send_on 			DATETIME NOT NULL,
		PRIMARY KEY (chat_id)
);
INSERT INTO musclr_chat.chat VALUES(1, 'Romeo', 'Julia', 'hello', NOW());
INSERT INTO musclr_chat.chat VALUES(2, 'Julia', 'Romeo', 'hola', NOW());
INSERT INTO musclr_chat.chat VALUES(3, 'Romeo', 'Julia', 'bonjour', NOW());
INSERT INTO musclr_chat.chat VALUES(4, 'Romeo', 'Arnold', ' hello', NOW());






