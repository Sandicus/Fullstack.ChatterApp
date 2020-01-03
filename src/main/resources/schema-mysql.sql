/*
SET sql_notes = 0;      -- Temporarily disable the "Table already exists" warning
CREATE TABLE IF NOT EXISTS ChatUsers(
    USER_NAME VARCHAR (255) NOT NULL,
    USER_PWD VARCHAR (255) NOT NULL,
    FIRST_NAME VARCHAR (255) NOT NULL,
    LAST_NAME VARCHAR (255) NOT NULL,
    EMAIL VARCHAR (255) NOT NULL,
    PRIMARY KEY (USER_NAME (50))
);

CREATE TABLE IF NOT EXISTS UserProfile(
    USER_NAME VARCHAR (255),
    STATE VARCHAR (255),
    BIO VARCHAR (255),
    USER_PICTURE LONGBLOB,
    PRIMARY KEY (USER_NAME (50))
);



CREATE TABLE IF NOT EXISTS ChatChannel(
    CHANNEL_NAME VARCHAR (255) NOT NULL,
    PRIMARY KEY (CHANNEL_NAME (50))
);

/*
1 - USER
2 - MODERATOR
3 - ADMIN
*/
CREATE TABLE IF NOT EXISTS chat_channel(
    channel_name VARCHAR (255) NOT NULL,
    public_channel BOOLEAN,
    PRIMARY KEY (channel_name (255))
);

INSERT INTO chat_channel (channel_name, public_channel) VALUES ('Public Channel 1', TRUE);
INSERT INTO chat_channel (channel_name, public_channel) VALUES ('Public Channel 2', TRUE);
INSERT INTO chat_channel (channel_name, public_channel) VALUES ('Public Channel 3', TRUE);



/*
-- O IS FALSE AND 1 IS TRUE IN MYSQL


SET sql_notes = 1;      -- And then re-enable the warning again


*/
