package com.prime5chat.chatter.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ChatChannel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;


    private String channelName;



    @ManyToMany
    private List<ChatUsers> users = new ArrayList<>();
    private boolean isPrivate;

    public ChatChannel(){}
    public ChatChannel(String channelName){
        this.channelName = channelName;
    }

    public Long getId() {
        return id;
    }
    public void setID(Long id){
            this.id = id;
    }
    public String getChannelName(){
        return channelName;
    }
    public void setChannelName(String channelName){
        this.channelName = channelName;
    }
    public boolean isPrivate(){
        return isPrivate;
    }
    public void setPrivate(boolean aPrivate){
        this.isPrivate = aPrivate;
    }
    public List<ChatUsers> getUsers() {
        return users;
    }

    public void setUsers(List<ChatUsers> users) {
        this.users = users;
    }
}
