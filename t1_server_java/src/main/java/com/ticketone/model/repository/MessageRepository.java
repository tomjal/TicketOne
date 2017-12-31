package com.ticketone.model.repository;

import java.util.List;

import javax.transaction.Transactional;

import com.ticketone.model.entity.Message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Transactional
@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findAll();

    Message save(Message message);
}
