package com.ticketone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @GetMapping(ApiVersion.V1)
    @ResponseBody
    public String index() {
        return "TicketOne Java API";
    }

    @GetMapping("/version")
    @ResponseBody
    public String version() {
        return "ApiVersion.V1";
    }
}
