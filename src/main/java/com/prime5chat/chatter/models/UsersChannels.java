package com.prime5chat.chatter.models;

import javax.persistence.*;

@Entity
@Table(name = "userschannels")
public class UsersChannels {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // had to add as JPA doesn't work without it

    @ManyToOne
    @JoinColumn(name = "CHANNEL_NAME")
    private  ChatChannel chatChannel;

    @ManyToOne
    @JoinColumn(name = "USER_NAME")
    private ChatUsers chatUser;

    private Integer USER_TYPE = 1; // default value 1 - user; 2 - moderator; 3 - admin

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ChatChannel getChatChannel() {
        return chatChannel;
    }

    public void setChatChannel(ChatChannel chatChannel) {
        this.chatChannel = chatChannel;
    }

    public ChatUsers getChatUser() {
        return chatUser;
    }

    public void setChatUser(ChatUsers chatUser) {
        this.chatUser = chatUser;
    }

    public Integer getUSER_TYPE() {
        return USER_TYPE;
    }

    public void setUSER_TYPE(Integer USER_TYPE) {
        this.USER_TYPE = USER_TYPE;
    }
}
