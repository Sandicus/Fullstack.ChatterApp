package com.prime5chat.chatter.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

import java.util.Set;

@Entity
@Table(name = "chat_channel")
public class ChatChannel {

    @Id
    @Column(columnDefinition = "VARCHAR(60)")
    @JsonProperty("channel_name")
    private String channelName;

    @JsonProperty("public_channel")
    private Boolean publicChannel;

    @OneToMany(mappedBy = "chatChannel")
    @JsonIgnore
    private Set<UsersChannels> usersChannels;

    public ChatChannel() {
    }
    public ChatChannel(String channelName) {
        this.channelName = channelName;
    }

    public String getCHANNELNAME() {
        return channelName;
    }

    public void setCHANNEL_NAME(String channelName) {
        this.channelName = channelName;
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
