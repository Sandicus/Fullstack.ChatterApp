package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.services.GroupServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.logging.Logger;

@Controller
public class GroupController {

    private static Logger logger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);

    private GroupServices groupServices;

    @Autowired
    public GroupController (GroupServices groupServices) {
        this.groupServices = groupServices;
    }

    @MessageMapping("/chat.createChannel")
    @SendTo("/sidebar/new_channel")
    public ChatChannel createChannel(ChatChannel chatChannel) {
        return this.groupServices.createChannel(chatChannel);
    }

    @MessageMapping("/chat.channels")
    @SendTo("/sidebar/channels")
    public List<ChatChannel> getPublicChannels() {
        logger.info("--------- getPublicChannels has been called ----------");
        return groupServices.getPublicChannels();
    }


}
