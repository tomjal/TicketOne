package com.ticketone.controller.validator;

import com.ticketone.controller.dto.MessageSaveDTO;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class MessageSaveDtoValidator implements Validator {

    public boolean supports(Class clazz) {
        return MessageSaveDTO.class.equals(clazz);
    }

    public void validate(Object obj, Errors e) {
        ValidationUtils.rejectIfEmpty(e, "author", "author.empty");
        ValidationUtils.rejectIfEmpty(e, "body", "body.empty");
        ValidationUtils.rejectIfEmpty(e, "roomName", "roomName.empty");
        MessageSaveDTO p = (MessageSaveDTO) obj;
        if (p.getBody().length() < 3) {
            e.rejectValue("body", "to.short");
        }
    }
}
