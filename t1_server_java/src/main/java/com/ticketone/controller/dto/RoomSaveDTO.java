package com.ticketone.controller.dto;

import java.io.Serializable;
import java.sql.Timestamp;

public class RoomSaveDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String roomTopic;
    private Long clientId;
    private Boolean isOpened;
    private Long id;
    private Boolean isSolved;

    public String getRoomTopic() {
        return roomTopic;
    }

    public void setRoomTopic(String roomTopic) {
        this.roomTopic = roomTopic;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Boolean getIsOpened() {
        return isOpened;
    }

    public void setIsOpened(Boolean isOpened) {
        this.isOpened = isOpened;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getIsSolved() {
        return isSolved;
    }

    public void setIsSolved(Boolean isSolved) {
        this.isSolved = isSolved;
    }
}
