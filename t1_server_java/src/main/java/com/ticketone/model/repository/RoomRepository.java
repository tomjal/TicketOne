package com.ticketone.model.repository;

import com.ticketone.model.entity.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface RoomRepository extends MongoRepository<Room, Long> {

    List<Room> findAll();

    Room findOne(long id);

    Room findByName(String roomName);

    Room save(Room room);
}
