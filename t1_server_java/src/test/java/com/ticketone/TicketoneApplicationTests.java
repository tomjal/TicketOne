package com.ticketone;

import com.ticketone.controller.MessageController;
import com.ticketone.controller.RoomController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TicketoneApplicationTests {

    @Autowired
    private RoomController roomController;

    @Autowired
    private MessageController messageController;

    @Test
    public void contextLoads() {
        assertThat(roomController).isNotNull();
        assertThat(messageController).isNotNull();
    }
}