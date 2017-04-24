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
@RequestMapping("/api/v1/rooms")
public class RoomController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private RoomService roomService;

    /**
     * REST method that returns list of all chat rooms in system.
     *
     * @return List of Room
     * @returnWrapped com.ticketone.model.entity.Room[]
     * @HTTP 500 when fail of service
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Room>> getAllRooms() {
        return new ResponseEntity<List<Room>>(roomService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{roomId}", method = RequestMethod.GET)
    public ResponseEntity<Room> getRoom(@PathVariable("roomId") Long id) {
        return new ResponseEntity<Room>(roomService.findOne(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<?> setRoom(@RequestBody Room room) {
        return new ResponseEntity<Room>(roomService.save(room), HttpStatus.OK);
    }
}
