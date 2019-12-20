package com.prime5chat.chatter.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserChannel {
    @Id
    @GeneratedValue
    private Long id;
}
