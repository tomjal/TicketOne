package com.ticketone.model.entity;

import java.io.Serializable;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Field;

public class Message implements Serializable {

    @Id
    @Field("id")
    private long id;

    @Field("author")
    private String author;

    @Field("body")
    private String body;

    public Message() {
    }

    public Message(String author, String body) {
        this.author = author;
        this.body = body;
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
}
