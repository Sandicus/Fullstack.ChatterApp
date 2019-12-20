package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatMessages;
import com.prime5chat.chatter.services.MessageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    private MessageServices messageServices;

    @Autowired
    public MessageController(MessageServices messageServices){
        this.messageServices = messageServices;
    }

    @MessageMapping("/chat.register")
    @SendTo("/topic/public")
    public ChatMessages register(@Payload ChatMessages chatMessages, SimpMessageHeaderAccessor headerAccessor){
        headerAccessor.getSessionAttributes().put("username", chatMessages.getUSER_NAME());
        return chatMessages;
    }

    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
     public ChatMessages sendMessage(@Payload ChatMessages chatMessages){
        System.out.println("SENDMESSAGE METHOD HAS BEEN CALLED");
        System.out.println(chatMessages.getUSER_NAME());
        System.out.println(chatMessages.getMESSAGE_TYPE());
        System.out.println(chatMessages.getMESSAGE());
        messageServices.saveMessage(chatMessages);
        return chatMessages;
    }

    @MessageMapping("/chat.leave")
    @SendTo("/topic/public")
    public ChatMessages logout(@Payload ChatMessages chatMessages) {
        return chatMessages;
    }
}