package com.ticketone.controller.test;

import static java.lang.Math.toIntExact;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import com.ticketone.controller.ApiVersion;
import com.ticketone.controller.RoomController;
import com.ticketone.model.entity.Room;
import com.ticketone.service.RoomService;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@WebMvcTest(RoomController.class)
public class RoomControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RoomService service;

    @Before
    public void setup() throws Exception {

    }

    @Test
    public void shouldReturnCorrectRoom() throws Exception {
        //Long id = 12345L;
        Long clientId = 11111L;
        //Room room = new Room(id);
        //room.setClient(clientId);
        //List<Room> rooms = new ArrayList<Room>();
        //rooms.add(room);
        //when(service.findByClient(clientId)).thenReturn(rooms);

        this.mockMvc.perform(get(ApiVersion.V1 + "/rooms/client/" + clientId));
               // .andDo(print()).andExpect(status().isOk())
               // .andExpect(jsonPath("$.id", is(toIntExact(id))));

        verify(service, times(1)).findByClient(clientId);
        verifyNoMoreInteractions(service);
    }
}