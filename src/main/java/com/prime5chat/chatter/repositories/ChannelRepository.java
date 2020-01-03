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
