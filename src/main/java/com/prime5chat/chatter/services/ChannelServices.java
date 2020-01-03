package com.prime5chat.chatter.services;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.repositories.ChannelRepository;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class ChannelServices {

    @Service
    public class ChannelService {

        @Autowired
        private ChannelRepository channelRepository;
        @Autowired
        private UserServices userService;

        public ChatChannel create(ChatChannel channel){
            return channelRepository.save(channel);
        }

        public ChatChannel findByChannelName(String name){
            return channelRepository.findByChannelName(name);
        }

        public ChatChannel findById(Long id){
            return channelRepository.getOne(id);
        }

        public Iterable<ChatChannel> findAll(){
            return channelRepository.findAll();
        }

        public Iterable<ChatChannel> findByIsPrivate(boolean isPrivate) {
            return channelRepository.findByIsPrivate(isPrivate);
        }

        /*public Iterable<ChatChannel> findAllPMsOfAUser(User user) {
            List<ChatChannel> privateChannels = new ArrayList<>();
            for (ChatChannel c : findByIsPrivate(true)) {
                if (userService.findAllByChannel(c.getId(), null).contains(user)) {
                    privateChannels.add(c);
                }
            }
            return privateChannels;
        }
*/
        public Boolean delete(Long id){
            channelRepository.deleteById(id);
            return true;
        }

        public ChatChannel updateChannel(Long id, String channelName){
            ChatChannel channel = channelRepository.getOne(id);
            channel.setCHANNEL_NAME(channelName);
            return channelRepository.save(channel);
        }

        public Boolean deleteAll() {
            channelRepository.deleteAll();
            return true;
        }
    }
}
