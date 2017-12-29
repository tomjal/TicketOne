package com.ticketone.model.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "rooms")
public class JpaRoom implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "name", unique = true)
    private String name;

    @OneToMany(mappedBy = "room")
    private List<JpaMessage> messages;

    public JpaRoom() {
    }

    public JpaRoom(Long id) {
        this.id = id;
    }

    public JpaRoom(String name) {
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

    @JsonIgnore
    public List<JpaMessage> getMessages() {
        return messages;
    }

    public void setMessages(List<JpaMessage> messages) {
        this.messages = messages;
    }
}
