package com.ticketone.interfaces;

import java.util.Collection;
import java.util.List;

import com.ticketone.datastore.Storable;

public interface DAO<T extends Storable> {

    Long getCount();

    void insertCollection(Collection<T> objects);

    T insert(T object);

    T update(T object);
}