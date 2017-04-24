package com.ticketone.aspect;

import com.ticketone.model.entity.Room;
import com.ticketone.service.WebSocketService;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class RoomServiceWsAspect {

    @Autowired
    WebSocketService webSocketService;

    @AfterReturning(
            pointcut = "execution(* com.ticketone.service.RoomService.save(..))",
            returning = "result")
    public void broadcastWsInfoAfterNewRoomSave(JoinPoint joinPoint, Room result) {
        String roomName = result.getName();
        webSocketService.broadcastNewRoomToAllUsers(roomName);
    }
}
