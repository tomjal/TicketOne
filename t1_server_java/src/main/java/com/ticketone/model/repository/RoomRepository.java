package com.ticketone.model.repository;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ticketone.model.entity.Room;

@Transactional
@Repository
public interface RoomRepository extends JpaRepository<Room, Long>{

}
