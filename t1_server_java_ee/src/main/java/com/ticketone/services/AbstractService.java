package com.ticketone.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.persistence.*;
import java.lang.reflect.*;
import java.util.Collection;

import com.ticketone.datastore.Storable;

public abstract class AbstractService<T extends Storable> implements DAO<T> {

    private final static Logger log = LoggerFactory.getLogger(Bootstrap.class);

    @PersistenceContext(unitName = "ticketOne")
    private EntityManager em;

    public Long getCount() {
        return em.createNamedQuery("").getSingleResult();
    }

    public void insertCollection(Collection<T> objects) {
        for (T object : objects) {
            insert(object);
        }
    }

    public T update(T object) {
        em.merge(object);
        em.flush();
        return object;
    }

    public T insert(T object) {
        em.persist(object);
        em.flush();
        return object;
    }

}
