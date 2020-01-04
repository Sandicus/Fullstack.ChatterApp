package com.prime5chat.chatter.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "chatusers")
public class ChatUsers {

    @Id
    @Column(columnDefinition = "VARCHAR(60)")
    private String username;
    private String channels;

    private String USER_PWD;
    private String FIRST_NAME;
    private String LAST_NAME;
    private String EMAIL;

    @OneToMany(mappedBy = "chatUser")
    private Set<UsersChannels> usersChannels;


    public String getUSER_NAME() {
        return username;
    }

    public void setUSER_NAME(String USER_NAME) {
        this.username = USER_NAME;
    }

    public String getUSER_PWD() {
        return USER_PWD;
    }

    public void setUSER_PWD(String password) {
        this.USER_PWD = password;
    }

    public String getFIRST_NAME() {
        return FIRST_NAME;
    }

    public void setFIRST_NAME(String FIRST_NAME) {
        this.FIRST_NAME = FIRST_NAME;
    }

    public String getLAST_NAME() {
        return LAST_NAME;
    }

    public void setLAST_NAME(String LAST_NAME) {
        this.LAST_NAME = LAST_NAME;
    }

    public String getEMAIL() {
        return EMAIL;
    }

    public void setEMAIL(String EMAIL) {
        this.EMAIL = EMAIL;
    }

    public Set<UsersChannels> getUsersChannels() {
        return usersChannels;
    }

    public void setUsersChannels(Set<UsersChannels> usersChannels) {
        this.usersChannels = usersChannels;
    }
}
