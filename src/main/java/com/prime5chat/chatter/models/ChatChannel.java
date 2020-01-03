package com.prime5chat.chatter.models;

import org.apache.tomcat.jni.User;

import javax.persistence.*;
import java.util.List;

@Entity
public class ChatChannel {

    @Id
    private String CHANNEL_NAME;

    //@ManyToMany
    //private List<User> allowedUsers;

    public String getCHANNELNAME() {
        return CHANNEL_NAME;
    }

    public void setCHANNEL_NAME(String CHANNEL_NAME) {
        this.CHANNEL_NAME = CHANNEL_NAME;
    }



}
