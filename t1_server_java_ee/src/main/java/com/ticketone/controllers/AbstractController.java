package com.ticketone.controllers;

import javax.ejb.*;
import javax.ws.rs.*;

import com.ticketone.datastore.Storable;

public abstract class AbstractController <T extends Storable>{

    public static final String APPLICATION_JSON_UTF8 = MediaType.APPLICATION_JSON + ";charset=utf-8";

    @GET
    @Path("/count")
    @Produces(APPLICATION_JSON_UTF8)
    public Response getCount(){
        return Response.ok().build();
    }

}
