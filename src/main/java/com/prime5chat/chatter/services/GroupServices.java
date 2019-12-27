package com.prime5chat.chatter.services;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.repositories.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class GroupServices {

    private GroupRepository groupRepository;

    @Autowired
    public GroupServices(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

    public void createChannel(ChatChannel chatChannel) {
        this.groupRepository.save(chatChannel);
    }

    public void updateChannel(String name, ChatChannel newChannel) {
        ChatChannel oldChannel = this.groupRepository.findById(name).get();
        oldChannel.setPublicChannel(newChannel.getPublicChannel());
        oldChannel.setUsersChannels(newChannel.getUsersChannels());

        this.groupRepository.save(oldChannel);
    }

    public void subscribeUser(ChatUsers user, ChatChannel channel) {
        //create new UsersChannels instance and add to both user and channel
    }



    public void deleteChannel(String name) {
        this.groupRepository.delete(this.groupRepository.findById(name).get());
    }

    public ArrayList<ChatChannel> getPublicChannels() {
        ArrayList<ChatChannel> results = new ArrayList<>();
        for(ChatChannel c : this.groupRepository.findAll()) {
            if(c.getPublicChannel()) results.add(c);
        }
        return results;
    }

    public ArrayList<ChatChannel> getUsersChannels() {
        ArrayList<ChatChannel> results = new ArrayList<>();
        for(ChatChannel c : this.groupRepository.findAll()) {

        }
        return results;
    }
}
