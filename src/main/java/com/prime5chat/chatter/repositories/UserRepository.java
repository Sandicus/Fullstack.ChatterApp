package com.prime5chat.chatter.repositories;

import com.prime5chat.chatter.models.ChatUsers;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<ChatUsers, Long> {

}
