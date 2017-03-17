package app.room;

import app.login.*;
import app.util.*;
import spark.*;
import java.util.*;
import static app.util.JsonUtil.*;
import static app.util.RequestUtil.*;

public class RoomController {

    public static Route fetchAllRooms = (Request request, Response response) -> {
        
        if (clientAcceptsHtml(request)) {
            HashMap<String, Object> model = new HashMap<>();
            model.put("rooms", "");
        }
    };
}