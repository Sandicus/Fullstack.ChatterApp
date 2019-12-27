package com.prime5chat.chatter.models;

import javax.persistence.*;
import java.util.List;

@Entity
//@Table(name = "chatchannel")
public class ChatChannel {

    @Id
    @Column(columnDefinition = "VARCHAR(60)")
    private String CHANNEL_NAME;

    private Boolean publicChannel;

//    @ManyToMany
//    private List<User> allowedUsers;

    public String getCHANNEL_NAME() {
        return CHANNEL_NAME;
    }

    public void setCHANNEL_NAME(String CHANNEL_NAME) {
        this.CHANNEL_NAME = CHANNEL_NAME;
    }

    public Boolean getPublicChannel() {
        return publicChannel;
    }

    public void setPublicChannel(Boolean publicChannel) {
        this.publicChannel = publicChannel;
    }
}
