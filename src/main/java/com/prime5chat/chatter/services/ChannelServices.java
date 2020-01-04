package com.prime5chat.chatter.services;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.models.ChatUsers;
import com.prime5chat.chatter.repositories.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



    @Service
    public class ChannelServices {

        @Autowired
        private GroupRepository groupRepository;
        @Autowired
        private UserServices userService;

        public ChatChannel create(ChatChannel channel){
            return groupRepository.save(channel);
        }

        public ChatChannel findByChannelName(String name){
            return groupRepository.findByChannelName(name);
        }

        public ChatChannel findById(String id){
            return groupRepository.getOne(id);
        }

        public Iterable<ChatChannel> findAll(){
            return groupRepository.findAll();
        }

        public Iterable<ChatChannel> findByIsPrivate(boolean isPrivate) {
            return groupRepository.findByIsPrivate(isPrivate);
        }

        public Iterable<ChatChannel> findAllPMsOfAUser(ChatUsers user) {
            List<ChatChannel> privateChannels = new ArrayList<>();
            for (ChatChannel c : findByIsPrivate(true)) {
                if (userService.findAllByChannel(c.getCHANNELNAME(), null).contains(user)) {
                    privateChannels.add(c);
                }
            }
            return privateChannels;
        }

        public Boolean delete(String id){
            groupRepository.deleteById(id);
            return true;
        }

        public ChatChannel updateChannel(String channelName){
            ChatChannel channel = groupRepository.getOne(channelName);
            channel.setCHANNEL_NAME(channelName);
            return groupRepository.save(channel);
        }

        public Boolean deleteAll() {
            groupRepository.deleteAll();
            return true;
        }
    }

