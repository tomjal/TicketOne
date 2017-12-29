package com.ticketone.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "messages")
public class JpaMessage implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "author")
    private String author;

    @Column(name = "body")
    private String body;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private JpaRoom room;

    public JpaMessage() {
    }

    public JpaMessage(String author, String body, JpaRoom room) {
        this.author = author;
        this.body = body;
        this.room = room;
    }

    public long getId() {
        return id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @JsonIgnore
    public JpaRoom getRoom() {
        return room;
    }

    public void setRoom(JpaRoom room) {
        this.room = room;
    }
}
