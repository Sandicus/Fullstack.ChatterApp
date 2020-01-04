package com.prime5chat.chatter.repositories;

import com.prime5chat.chatter.models.ChatChannel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChannelRepository extends JpaRepository<ChatChannel, Long> {


    ChatChannel findByChannelName (String channelName);

    Iterable<ChatChannel> findByIsPrivate(boolean isPrivate);

}
// This is my group project and my role is to create a channel similar to slack.
//I Used ChannelController + ChatChannel + Channel Services + ChannelRepository

//I tried my best with some help to create this fullstack but i dont understand fully what i did.

//I  am receiving an Error launching springBoot....Can you help me solve this Error?