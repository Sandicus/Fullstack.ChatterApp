package com.prime5chat.chatter.repositories;

import com.prime5chat.chatter.models.ChatMessages;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends CrudRepository<ChatMessages, Long> {
}
