package com.prime5chat.chatter.services;


import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.models.UserChannel;
import com.prime5chat.chatter.repositories.UserRepository;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.util.List;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupServices groupService;


    @Autowired
    public UserServices(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public ChatUsers createUser(ChatUsers user) {
        return this.userRepository.save(user);
    }

    public Iterable<ChatUsers> getUsers() {
        return this.userRepository.findAll();
    }

    public List<ChatUsers> findAllByChannel(String channelName, Pageable pageable) {
        return userRepository.findAllByChannels(groupService.findById(channelName), pageable);
    }

    public ChatUsers findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}


