package com.ticketone.controllers;

import javax.annotation.PostConstruct;
import javax.ejb.*;
import javax.ws.rs.*;

import com.ticketone.services.MessagesService;
import com.ticketone.datastore.Message;

@Path("/messages")
public class MessagesController extends AbstractController<Message> {

    @EJB
    MessagesService messagesService;

    @PostConstruct
    public void postConstruct() {
    }

    @GET
    @Path("/channel/{id}")
    @Produces(APPLICATION_JSON_UTF8)
    public Response getMessagesByChannelId(@PathParam("id") String id) {
        return Response.ok(messagesService.getMessagesByChannel(id)).build();
    }

}
