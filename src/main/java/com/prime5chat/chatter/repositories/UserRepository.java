package com.prime5chat.chatter.repositories;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.models.ChatUsers;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<ChatUsers, String> {

    List<ChatUsers> findAllByChannels(ChatChannel channel, Pageable pageable);

    ChatUsers findByUsername(String USER_NAME);
}

