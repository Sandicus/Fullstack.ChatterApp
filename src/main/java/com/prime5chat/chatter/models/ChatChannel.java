package com.prime5chat.chatter.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "chat_channel")
public class ChatChannel {

    @Id
    @Column(columnDefinition = "VARCHAR(60)")
    @JsonProperty("channel_name")
    private String CHANNEL_NAME;

    @JsonProperty("public_channel")
    private Boolean publicChannel;

    @OneToMany(mappedBy = "chatChannel")
    @JsonIgnore
    private Set<UsersChannels> usersChannels;


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

    public Set<UsersChannels> getUsersChannels() {
        return usersChannels;
    }

    public void setUsersChannels(Set<UsersChannels> usersChannels) {
        this.usersChannels = usersChannels;
    }
}
