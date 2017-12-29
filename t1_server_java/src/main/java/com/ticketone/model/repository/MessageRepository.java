package com.ticketone.model.repository;

import com.ticketone.model.entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Repository
public interface MessageRepository extends MongoRepository<Message, Long> {

}
