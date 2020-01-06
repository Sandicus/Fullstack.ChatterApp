package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.services.GroupServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class GroupController {

    private GroupServices groupServices;

    @Autowired
    public GroupController (GroupServices groupServices) {
        this.groupServices = groupServices;
    }


    public ChatChannel createChannel(ChatChannel chatChannel) {
        return this.groupServices.createChannel(chatChannel);
    }

    @MessageMapping("/chat.publicchannels")
    @SendTo("/format/channels")
    public List<ChatChannel> getPublicChannels() {
        return groupServices.getPublicChannels();
    }
}
