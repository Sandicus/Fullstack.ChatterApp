package com.prime5chat.chatter.models;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;

@Entity
@Table(name = "userschannels")
public class UsersChannels {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // had to add as JPA doesn't work without it
    private  String CHANNEL_NAME;
    private  String USER_NAME;
    private Integer USER_TYPE = 1; // default value 1 - user; 2 - moderator; 3 - admin

    public String getCHANNEL_NAME() {
        return CHANNEL_NAME;
    }

    public void setCHANNEL_NAME(String CHANNEL_NAME) {
        this.CHANNEL_NAME = CHANNEL_NAME;
    }

    public String getUSER_NAME() {
        return USER_NAME;
    }

    public void setUSER_NAME(String USER_NAME) {
        this.USER_NAME = USER_NAME;
    }

    public Integer getUSER_TYPE() {
        return USER_TYPE;
    }

    public void setUSER_TYPE(Integer USER_TYPE) {
        this.USER_TYPE = USER_TYPE;
    }
}
