package com.prime5chat.chatter.services;

import com.prime5chat.chatter.models.ChatMessages;
import com.prime5chat.chatter.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServices {

    @Autowired
    MessageRepository messageRepository;

    public void saveMessage(ChatMessages chatMessages){
        messageRepository.save(chatMessages);
    }

}
