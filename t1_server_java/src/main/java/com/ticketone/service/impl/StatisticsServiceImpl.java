package com.ticketone.service.impl;

import com.ticketone.controller.dto.StatisticsDTO;
import com.ticketone.service.RoomService;
import com.ticketone.service.StatisticsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatisticsServiceImpl implements StatisticsService {
    @Autowired
    private RoomService roomService;

    @Override
    public StatisticsDTO getStatistics() {
        StatisticsDTO statsDTO = new StatisticsDTO();
        statsDTO.setSolved(roomService.countSolved());
        statsDTO.setUnsolved(roomService.countUnsolved());
        return statsDTO;
    }
}
