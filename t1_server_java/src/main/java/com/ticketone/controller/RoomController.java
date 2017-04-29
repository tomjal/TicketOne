package com.ticketone.controller;

import com.ticketone.model.entity.Room;
import com.ticketone.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiVersion.V1 + "/rooms")
public class RoomController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private RoomService roomService;

    @GetMapping("/")
    public ResponseEntity<List<Room>> getAllRooms() {
        return new ResponseEntity<List<Room>>(roomService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<Room> getRoom(@PathVariable("roomId") Long id) {
        return new ResponseEntity<Room>(roomService.findOne(id), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> setRoom(@RequestBody Room room) {
        return new ResponseEntity<Room>(roomService.save(room), HttpStatus.OK);
    }
}
