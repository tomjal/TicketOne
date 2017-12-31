package com.ticketone.controller;

import com.ticketone.controller.dto.StatisticsDTO;
import com.ticketone.service.StatisticsService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ApiVersion.V1 + "/stats")
public class StatisticsController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private StatisticsService statisticsService;

    @GetMapping("/employee")
    public ResponseEntity<StatisticsDTO> getEmployeeStatistics(@PathVariable("roomName") String roomName) {
        return new ResponseEntity<StatisticsDTO>(statisticsService.getStatistics(), HttpStatus.OK);
    }
}
