package com.prime5chat.chatter.services;

import com.prime5chat.chatter.models.ChatMessages;
import com.prime5chat.chatter.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageServices {

    @Autowired
    MessageRepository messageRepository;

    public void saveMessage(ChatMessages chatMessages){
        messageRepository.save(chatMessages);
    }

    public List<ChatMessages> getMessagesByChannel(String channel_name) {
        List<ChatMessages> results = new ArrayList<>();
        for(ChatMessages c : messageRepository.findAll()){
            if(c.getCHANNEL_NAME().equals(channel_name)){
                results.add(c);
            }
        }
        return results;
    }
}