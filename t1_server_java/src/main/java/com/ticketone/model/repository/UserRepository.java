package com.ticketone.model.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ticketone.model.entity.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
