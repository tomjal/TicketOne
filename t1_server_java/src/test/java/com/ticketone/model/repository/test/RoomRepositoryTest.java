package com.ticketone.model.repository.test;

import com.ticketone.model.entity.Room;
import com.ticketone.model.repository.RoomRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class RoomRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private RoomRepository roomRepository;

    @Test
    public void shouldFindTwoMockRooms() {
        String name = "Lopez";
        Room room = new Room(name);
        entityManager.persist(room);

        List<Room> rooms = roomRepository.findAll();

        assertThat(rooms).isNotEmpty();
        assertThat(rooms.get(1).getName()).isEqualTo(name);
    }
}