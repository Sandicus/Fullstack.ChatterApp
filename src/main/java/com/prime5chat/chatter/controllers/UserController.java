package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatMessages;
import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class UserController {

    private UserServices userServices;

    @Autowired
    public UserController(UserServices userServices){
        this.userServices = userServices;
    }

    @MessageMapping("/chat.createUser")
    public ChatMessages createUser(@Payload ChatMessages chatMessages) {
        System.out.println("-----------------------------------");
        System.out.println(chatMessages.getUSER_NAME());
        System.out.println(chatMessages.getMESSAGE_TYPE());
        System.out.println("-----------------------------------");
        return chatMessages;
    }

    @PostMapping(path = "/users")

    public ResponseEntity<?> createUser(@RequestBody ChatUsers user){
        return new ResponseEntity<>(this.userServices.createUser(user), HttpStatus.CREATED);
    }

    @GetMapping(path = "/users")
    public ResponseEntity<Iterable<ChatUsers>> getUsers(){
        return new ResponseEntity<>(this.userServices.getUsers(), HttpStatus.OK);
    }

}
