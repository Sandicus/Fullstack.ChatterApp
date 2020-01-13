package com.prime5chat.chatter.services;


import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Logger;

@Service
public class UserServices {

    private static Logger logger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
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

    public ChatUsers checkLoginInfo(ChatUsers user) {
        Optional<ChatUsers> chatUser = this.userRepository.findById(user.getUSER_NAME());

        if(chatUser.isPresent() && chatUser.get().getUSER_PWD().equals(user.getUSER_PWD())) {
            logger.info("/////////////results///////////");
            logger.info(chatUser.get().toString());
            logger.info("/////////////results///////////");
            return chatUser.get();
        }
        else { return new ChatUsers(); }
    }
}
