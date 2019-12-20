package com.prime5chat.chatter.services;


import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {

    private UserRepository userRepository;

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
}
