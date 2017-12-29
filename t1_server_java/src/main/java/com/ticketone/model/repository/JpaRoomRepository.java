package com.ticketone.model.repository;

import com.ticketone.model.entity.JpaRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface JpaRoomRepository extends JpaRepository<JpaRoom, Long> {

    List<JpaRoom> findAll();

    JpaRoom findOne(long id);

    JpaRoom findByName(String roomName);

    JpaRoom save(JpaRoom room);
}
