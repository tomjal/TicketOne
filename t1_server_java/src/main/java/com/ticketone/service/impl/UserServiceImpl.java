package com.ticketone.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ticketone.model.entity.User;
import com.ticketone.model.repository.UserRepository;
import com.ticketone.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public User findOne(long id) {
		return null;
	}
}
