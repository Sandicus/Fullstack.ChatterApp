package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.services.GroupServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GroupController {

    private GroupServices groupServices;

    @Autowired
    public GroupController (GroupServices groupServices) {
        this.groupServices = groupServices;
    }


    @GetMapping
    public void getAllChannels(){

    }

    public void createChannel(ChatChannel chatChannel) {
        this.groupServices.createChannel(chatChannel);
    }
}
