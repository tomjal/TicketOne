package com.ticketone.controller.dto;

import java.io.Serializable;

public class MessageSaveDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long author;
    private String authorRole;
    private String body;
    private Long roomId;

    public Long getAuthor() {
        return author;
    }

    public void setAuthor(Long author) {
        this.author = author;
    }

    public String getAuthorRole() {
        return authorRole;
    }

    public void setAuthorRole(String authorRole) {
        this.authorRole = authorRole;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }
}
