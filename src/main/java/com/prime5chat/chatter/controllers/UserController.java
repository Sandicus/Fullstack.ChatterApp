package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatMessages;
import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.logging.Logger;

@Controller
public class UserController {

    private static Logger logger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
    private UserServices userServices;

    @Autowired
    public UserController(UserServices userServices){
        this.userServices = userServices;
    }

    @MessageMapping("/chat.createUser")
    public ChatMessages createUser(@Payload ChatMessages chatMessages) {
        return chatMessages;
    }

    @MessageMapping("/chat.login")
    @SendTo("/connect/login")
    public ChatUsers login(@Payload ChatUsers user) {
        logger.info("/////////////login method has been called///////////");
        logger.info("username is: " + user.getUSER_NAME());
        logger.info("password is: " + user.getUSER_PWD());
        logger.info("/////////////login method has been called///////////");
        return userServices.checkLoginInfo(user);
    }

//    @PostMapping(path = "/users")
//    public ResponseEntity<?> createUser(@RequestBody ChatUsers user){
//        return new ResponseEntity<>(this .userServices.createUser(user), HttpStatus.CREATED);
//    }

    @GetMapping(path = "/users")
    public ResponseEntity<Iterable<ChatUsers>> getUsers(){
        return new ResponseEntity<>(this.userServices.getUsers(), HttpStatus.OK);
    }

    @MessageMapping("/chat.register")
    @SendTo("/connect/createuser")
    public ChatUsers createUser(@Payload ChatUsers chatUsers){
        return this.userServices.createUser(chatUsers);
    }

}
