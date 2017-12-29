package com.ticketone.model.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="rooms")
public class Room implements Serializable {

    @Id
    @Field("id")
    private long id;

    @Indexed(unique=true)
    @Field("name")
    private String name;

    private List<Message> messages;

    public Room() {
    }

    public Room(Long id) {
        this.id = id;
    }

    public Room(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String author) {
        this.name = author;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }
}
