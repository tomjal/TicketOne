package com.ticketone.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.ticketone.controller.dto.RoomSaveDTO;
import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;
import com.ticketone.model.repository.RoomRepository;
import com.ticketone.service.RoomService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomServiceImpl implements RoomService {
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    @Override
    public Room findOne(long id) {
        return roomRepository.findOne(id);
    }

    @Override
    public List<Room> findByOpened() {
        return roomRepository.findByOpenTrue();
    }

    @Override
    public List<Room> findByClient(long clientId) {
        return roomRepository.findByClient(clientId);
    }

    @Override
    public List<Room> findByTopic(String topic) {
        return roomRepository.findByTopic(topic);
    }

    @Override
    public Integer countSolved() {
        List<Room> solvedRooms = roomRepository.findBySolvedTrue();
        return solvedRooms.size();
    }

    @Override
    public Integer countUnsolved() {
        List<Room> solvedRooms = roomRepository.findBySolvedFalse();
        return solvedRooms.size();
    }

    @Override
    public Room updateSolvedStatus(Long roomId, Boolean isSolved) {
        Room room = roomRepository.findOne(roomId);
        room.setSolved(isSolved);
        return roomRepository.save(room);
    }

    @Override
    public Room save(RoomSaveDTO roomDto) {
        Room newRoom = new Room(roomDto.getRoomTopic());
        newRoom.setId(roomDto.getId());
        newRoom.setClient(roomDto.getClientId());
        newRoom.setOpen(true);
        newRoom.setMessages(new ArrayList<Message>());
        return roomRepository.save(newRoom);
    }
}
