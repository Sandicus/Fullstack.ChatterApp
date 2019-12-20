package com.prime5chat.chatter.repositories;

import com.prime5chat.chatter.models.Channel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
<<<<<<< HEAD:src/main/java/com/prime5chat/chatter/repositories/ChannelRepository.java
public interface ChannelRepository extends CrudRepository<Channel, Long> {
=======
public interface GroupRepository extends CrudRepository<Channel, Long> {
>>>>>>> dev:src/main/java/com/prime5chat/chatter/repositories/GroupRepository.java
}
