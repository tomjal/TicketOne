package com.ticketone.controller.converter;

import com.ticketone.controller.dto.MessageSaveDTO;
import com.ticketone.model.entity.Message;
import com.ticketone.model.entity.Room;
import org.springframework.stereotype.Component;

@Component
public class MessageSaveConverterImpl implements GenericConverter<Message, MessageSaveDTO, Room> {

    @Override
    public MessageSaveDTO toDto(Message mes) {
        MessageSaveDTO messageSaveDto = new MessageSaveDTO();
        messageSaveDto.setAuthor(mes.getAuthor());
        messageSaveDto.setBody(mes.getBody());
        return messageSaveDto;
    }

    @Override
    public Message fromDto(MessageSaveDTO dto, Room room) {
        Message message = new Message();
        message.setAuthor(dto.getAuthor());
        message.setBody(dto.getBody());
        return message;
    }
}
