package com.prime5chat.chatter.repositories;

import com.prime5chat.chatter.models.Channel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends CrudRepository<Channel, Long> {
}
