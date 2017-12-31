package com.ticketone.model.repository;

import com.ticketone.model.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findAll();
    
    Room findOne(long id);

    List<Room> findByOpenTrue();

    List<Room> findBySolvedTrue();

    List<Room> findBySolvedFalse();

    List<Room> findByClient(long clientId);

    List<Room> findByTopic(String topic);

    Room save(Room room);
}
