package com.ticketone.service;

import java.util.List;

import com.ticketone.controller.dto.RoomSaveDTO;
import com.ticketone.model.entity.Room;

public interface RoomService {
    List<Room> findAll();

    Room findOne(long id);

    List<Room> findByOpened();

    List<Room> findByClient(long clientId);

    List<Room> findByTopic(String topic);

    Integer countSolved();

    Integer countUnsolved();

    Room updateSolvedStatus(Long roomId, Boolean isSolved);

    Room save(RoomSaveDTO room);
}
