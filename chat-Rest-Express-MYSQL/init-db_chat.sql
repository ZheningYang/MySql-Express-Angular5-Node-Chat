DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS chat;
DROP TABLE IF EXISTS relationship;
DROP TABLE IF EXISTS user CASCADE;

CREATE TABLE user (
	_id 			    VARCHAR(125) NOT NULL,
	username 			VARCHAR(125) NOT NULL,
	email 				VARCHAR(125) NOT NULL,
	password 			VARCHAR(125) NOT NULL,
	image   			VARCHAR(250) NOT NULL,
		PRIMARY KEY (_id)
);

INSERT INTO musclr_chat.user VALUES(
'5af8532a08dfd90184cabd24', 'Roméo', 'Roméo@gmail.com', '123456', 'Chris.jpeg'
);
INSERT INTO musclr_chat.user VALUES(
'5af84f93bfc2682f887fb0ee', 'Julia', 'Julia@gmail.com', '123456', 'Scarlett.jpg'
);
INSERT INTO musclr_chat.user VALUES(
'5af8642008dfd90184cabd25', 'Benedict', 'user1@gmail.com', '123456', 'Benedict.jpg'
);
INSERT INTO musclr_chat.user VALUES(
'5af8643808dfd90184cabd26', 'Elizabeth', 'user2@gmail.com', '123456', 'Elizabeth.png'
);
INSERT INTO musclr_chat.user VALUES(
'5af8645a08dfd90184cabd27', 'Gwyneth', 'user3@gmail.com', '123456', 'Gwyneth.jpg'
);
INSERT INTO musclr_chat.user VALUES(
'5af8648c08dfd90184cabd28', 'Karen', 'user4@gmail.com', '123456', 'Karen.jpg'
);
INSERT INTO musclr_chat.user VALUES(
'5af864aa08dfd90184cabd29', 'Mark', 'user5@gmail.com', '123456', 'Mark.jpg'
);INSERT INTO musclr_chat.user VALUES(
'5af864cb08dfd90184cabd2a', 'Robert', 'user6@gmail.com', '123456', 'Robert.jpeg'
);
INSERT INTO musclr_chat.user VALUES(
'5af864e408dfd90184cabd2b', 'Tom', 'user7@gmail.com', '123456', 'Tom.png'
);
INSERT INTO musclr_chat.user VALUES(
'5af864fe08dfd90184cabd2c', 'Zoe', 'user8@gmail.com', '123456', 'Zoe.jpg'
);

CREATE TABLE relationship (
    user_one_id 		VARCHAR(125) NOT NULL,
    user_two_id 		VARCHAR(125) NOT NULL,
    status				VARCHAR(100),
    action_user_id	VARCHAR(125) NOT NULL
);

INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af84f93bfc2682f887fb0ee', 'accepted', '5af8532a08dfd90184cabd24');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af8642008dfd90184cabd25', 'accepted', '5af8642008dfd90184cabd25');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af8643808dfd90184cabd26', 'accepted', '5af8643808dfd90184cabd26');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af8645a08dfd90184cabd27', 'accepted', '5af8645a08dfd90184cabd27');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af8648c08dfd90184cabd28', 'accepted', '5af8532a08dfd90184cabd24');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af864aa08dfd90184cabd29', 'accepted', '5af8532a08dfd90184cabd24');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af864cb08dfd90184cabd2a', 'accepted', '5af864cb08dfd90184cabd2a');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af864e408dfd90184cabd2b', 'accepted', '5af864e408dfd90184cabd2b');
INSERT INTO musclr_chat.relationship VALUES('5af84f93bfc2682f887fb0ee', '5af8642008dfd90184cabd25', 'accepted', '5af84f93bfc2682f887fb0ee');
INSERT INTO musclr_chat.relationship VALUES('5af84f93bfc2682f887fb0ee', '5af8643808dfd90184cabd26', 'accepted', '5af8643808dfd90184cabd26');
INSERT INTO musclr_chat.relationship VALUES('5af8642008dfd90184cabd25', '5af8645a08dfd90184cabd27', 'accepted', '5af8642008dfd90184cabd25');
INSERT INTO musclr_chat.relationship VALUES('5af8532a08dfd90184cabd24', '5af864aa08dfd90184cabd29', 'accepted', '5af8532a08dfd90184cabd24');

CREATE TABLE chat(
	chat_id 			BIGINT(20) NOT NULL AUTO_INCREMENT,
	user_from_id 		VARCHAR(125) NOT NULL,
	user_to_id 		    VARCHAR(125) NOT NULL,
	message 			VARCHAR(250),
	send_on 			DATETIME NOT NULL,
		PRIMARY KEY (chat_id)
);
INSERT INTO musclr_chat.chat VALUES(1, '5af8532a08dfd90184cabd24', '5af84f93bfc2682f887fb0ee', 'hello', NOW());
INSERT INTO musclr_chat.chat VALUES(2, '5af84f93bfc2682f887fb0ee', '5af8532a08dfd90184cabd24', 'hola', NOW());
INSERT INTO musclr_chat.chat VALUES(3, '5af8532a08dfd90184cabd24', '5af84f93bfc2682f887fb0ee', 'bonjour', NOW());
INSERT INTO musclr_chat.chat VALUES(4, '5af8532a08dfd90184cabd24', '5af8642008dfd90184cabd25', ' hello', NOW());






