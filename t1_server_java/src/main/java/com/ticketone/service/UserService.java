package com.ticketone.service;

import com.ticketone.model.entity.User;

public interface UserService {
    User findOne(long id);
}
