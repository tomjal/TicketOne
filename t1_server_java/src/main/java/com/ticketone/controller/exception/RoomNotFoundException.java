package com.ticketone.controller.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
class RoomNotFoundException extends RuntimeException {

    public RoomNotFoundException(String roomName) {
        super("could not find room '" + roomName + "'.");
    }
}
