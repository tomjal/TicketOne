package com.ticketone.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.ejb.*;
import javax.ws.rs.*;

import com.ticketone.services.RoomsService;
import com.ticketone.datastore.Room;

@Path("/rooms")
public class RoomsController extends AbstractController<Room> {

    private final static Logger log = LoggerFactory.getLogger();

    @EJB
    private RoomsService roomsService;

    @PostConstruct
    public void postConstruct() {
    }

}
