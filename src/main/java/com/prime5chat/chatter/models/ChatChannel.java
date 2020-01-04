package com.prime5chat.chatter.models;

import javax.persistence.*;

@Entity
public class ChatChannel {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String channelName;
    private Long id;
    private boolean isPrivate;

    public ChatChannel() {
    }
    public ChatChannel(String channelName, Long id) {
        this.channelName = channelName;
        this.id = id;
    }

//    @OneToMany
//    List<UserServices> allowedUsers;

    public boolean isPrivate(){return true;}

    public String getCHANNELNAME() {
        return channelName;
    }

    public void setCHANNEL_NAME(String channelName) {
        this.channelName = channelName;
    }


    public  Long  getId() {
        return id;
    }
}
