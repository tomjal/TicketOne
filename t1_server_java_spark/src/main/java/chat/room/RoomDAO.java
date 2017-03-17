package app.room;

import com.google.common.collect.*;
import java.util.*;

public class RoomDao {

    private final List<Room> rooms = ImmutableList.of(
    );

    public Iterable<Room> getAllRooms() {
        return rooms;
    }

    public Room getBookById(String id) {
        return books.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);
    }
}