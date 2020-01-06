package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatMessages;
import com.prime5chat.chatter.services.MessageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.logging.Logger;

@Controller
public class MessageController {

    private static Logger logger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
    private MessageServices messageServices;

    @Autowired
    public MessageController(MessageServices messageServices) {
        this.messageServices = messageServices;
    }

    @MessageMapping("/chat.register")
    @SendTo("/topic/public")
    public ChatMessages register(@Payload ChatMessages chatMessages, SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("username", chatMessages.getUSER_NAME());
        return chatMessages;
    }

    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
     public ChatMessages sendMessage(@Payload ChatMessages chatMessages) {
        messageServices.saveMessage(chatMessages);
        return chatMessages;
    }

    @MessageMapping("/chat.leave")
    @SendTo("/topic/public")
    public ChatMessages logout(@Payload ChatMessages chatMessages) {
        return chatMessages;
    }

    @MessageMapping("/chat.getMessages")
    @SendTo("/format/getMessages")
    public List<ChatMessages> ChatMessages(@Payload String channelName) {
        logger.info("--------------|");
        logger.info(channelName.substring(1, channelName.length() - 1));
        logger.info("|--------------");
        return messageServices.getMessagesByChannel(channelName.substring(1, channelName.length() - 1));
    }
}