package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.services.GroupServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@Controller
public class GroupController {

    private GroupServices groupServices;

    @Autowired
    public GroupController (GroupServices groupServices) {
        this.groupServices = groupServices;
    }


    public void createChannel(ChatChannel chatChannel) {
        this.groupServices.createChannel(chatChannel);
    }

    @MessageMapping("/chat.publicchannels")
    @SendTo("/interface/channels")
    public List<ChatChannel> getPublicChannels() {
        System.out.println("--------------------");
        System.out.println("GETTING PUBLIC CHANNELS");
        System.out.println("--------------------");
        return groupServices.getPublicChannels();
    }
}
