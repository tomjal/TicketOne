package com.ticketone.controller.test;

import com.ticketone.controller.ApiVersion;
import com.ticketone.controller.MainController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(MainController.class)
public class MainControllerMvcTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void mvcMainControllerShouldReturnDefaultMessage() throws Exception {
        String defaultMessage = "TicketOne Java API";
        this.mockMvc.perform(get(ApiVersion.V1)).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString(defaultMessage)));
    }
}