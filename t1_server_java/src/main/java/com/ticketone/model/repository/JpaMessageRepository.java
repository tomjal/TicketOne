package com.ticketone.model.repository;

import com.ticketone.model.entity.JpaMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Transactional
@Repository
public interface JpaMessageRepository extends JpaRepository<JpaMessage, Long> {

    List<JpaMessage> findAll();

    JpaMessage save(JpaMessage message);

    Collection<JpaMessage> findByRoomName(String roomName);
}
