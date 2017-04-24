package com.ticketone.aspect;

import com.ticketone.model.entity.Room;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class RoomServiceWsAspect {

    @AfterReturning(
            pointcut = "execution(* com.ticketone.service.RoomService.save(..))",
            returning = "result")
    public void broadcastWsInfoAfterNewRoomSave(JoinPoint joinPoint, Room result) {
        String roomName = result.getName();
        System.out.println("broadcastWsInfoAfterNewRoomSave() with " + roomName);
    }
}
