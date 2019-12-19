/*
SET sql_notes = 0;      -- Temporarily disable the "Table already exists" warning

CREATE TABLE IF NOT EXISTS chat_users(
    USER_NAME VARCHAR (255) NOT NULL,
    USER_PWD VARCHAR (255) NOT NULL,
    FIRST_NAME VARCHAR (255) NOT NULL,
    LAST_NAME VARCHAR (255) NOT NULL,
    EMAIL VARCHAR (255) NOT NULL,
    PRIMARY KEY (USER_NAME)
    CONSTRAINT FK_PROFILE FOREIGN KEY (USER_NAME) REFERENCES chat_user_profile(USER_NAME)
);

CREATE TABLE IF NOT EXISTS chat_user_profile(
    USER_NAME VARCHAR (255),
    STATE VARCHAR (255),
    BIO VARCHAR (255),
    USER_PICTURE LONGBLOB
    PRIMARY KEY (USER_NAME)
);

CREATE TABLE IF NOT EXISTS chat_channels(
    CHANNEL_NAME VARCHAR (255) NOT NULL,
    PRIMARY KEY (CHANNEL_NAME)
);


1 - USER
2 - MODERATOR
3 - ADMIN

CREATE TABLE IF NOT EXISTS users_channels(
    CHANNEL_NAME VARCHAR (255) NOT NULL,
    USER_NAME VARCHAR (255) NOT NULL,
    USER_TYPE INT (11) NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS chat_messages(
    MSG_ID BIGINT (11) NOT NULL AUTO_INCREMENT,
    CHANNEL_NAME VARCHAR (255) NULL,
    USER_NAME VARCHAR (255) NULL,
    MSG_TIMESTAMP TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    MESSAGE VARCHAR (255) NOT NULL
    PRIMARY KEY (MSG_ID)
);



-- O IS FALSE AND 1 IS TRUE IN MYSQL


SET sql_notes = 1;      -- And then re-enable the warning again

 */

