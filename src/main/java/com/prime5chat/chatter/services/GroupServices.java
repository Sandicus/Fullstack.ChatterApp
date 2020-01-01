package com.prime5chat.chatter.services;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.models.UsersChannels;
import com.prime5chat.chatter.repositories.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Set;

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
        if(this.groupRepository.findById(name).isPresent()) {
            ChatChannel oldChannel = this.groupRepository.findById(name).get();
            oldChannel.setPublicChannel(newChannel.getPublicChannel());
            oldChannel.setUsersChannels(newChannel.getUsersChannels());
            this.groupRepository.save(oldChannel);
        }
    }

    public void subscribeUser(ChatUsers user, ChatChannel channel, Integer type) {
        //create new UsersChannels instance and add to both user and channel
        UsersChannels addThis = new UsersChannels();
        addThis.setUSER_TYPE(type);
        addThis.setChatUser(user);
        addThis.setChatChannel(channel);

        Set<UsersChannels> channels = user.getUsersChannels();
        channels.add(addThis);
        user.setUsersChannels(channels);

        Set<UsersChannels> channels1 = channel.getUsersChannels();
        channels1.add(addThis);
        channel.setUsersChannels(channels1);
    }

    public void deleteChannel(String name) {
        if(this.groupRepository.findById(name).isPresent()) {
            this.groupRepository.delete(this.groupRepository.findById(name).get());
        }
    }

    public ArrayList<ChatChannel> getPublicChannels() {
        ArrayList<ChatChannel> results = new ArrayList<>();
        for(ChatChannel c : this.groupRepository.findAll()) {
            if(c.getPublicChannel()) results.add(c);
        }
        return results;
    }

    public ArrayList<ChatChannel> getSubscribedChannels(ChatUsers user) {
        ArrayList<ChatChannel> results = new ArrayList<>();
        for(UsersChannels uc : user.getUsersChannels()) {
            results.add(uc.getChatChannel());
        }
        return results;
    }
}
