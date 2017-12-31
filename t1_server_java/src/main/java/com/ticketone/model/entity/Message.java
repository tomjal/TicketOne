package com.ticketone.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "messages")
public class Message implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "author")
    private Long author;

    @Column(name = "body")
    private String body;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    public Message() {
    }

    public Message(Long author, String body, Room room) {
        this.author = author;
        this.body = body;
        this.room = room;
    }

    public long getId() {
        return id;
    }

    public Long getAuthor() {
        return author;
    }

    public void setAuthor(Long author) {
        this.author = author;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @JsonIgnore
    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
