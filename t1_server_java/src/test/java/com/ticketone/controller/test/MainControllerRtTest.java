package com.ticketone.controller.test;

import com.ticketone.controller.ApiVersion;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MainControllerRtTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    /*@Test
    public void mainControllerShouldReturnDefaultMessage() throws Exception {
        String defaultMessage = "TicketOne Java API";
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/" + ApiVersion.V1,
                String.class)).contains(defaultMessage);
    }*/
}