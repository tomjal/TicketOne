package com.ticketone.service;

import com.ticketone.model.entity.Room;

import java.util.List;

public interface JpaRoomService {
    List<Room> findAll();

    Room findOne(long id);

    Room save(Room room);
}
