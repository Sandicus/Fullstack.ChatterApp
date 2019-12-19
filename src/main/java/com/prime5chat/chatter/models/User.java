package com.prime5chat.chatter.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class User {
    @Id
    private String UserName;
    private String password;
//    @ManyToMany
//    private List<Group> groups;


    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
