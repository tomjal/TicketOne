package com.ticketone.datastore;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
public class Storable implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private Long creationTime;

    public Storable() {
        creationTime = System.currentTimeMillis();
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Long getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Long creationTime) {
        this.creationTime = creationTime;
    } 
}
