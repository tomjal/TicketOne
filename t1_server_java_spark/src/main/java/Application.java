package app;

import app.chat.*;
import app.index.*;
import app.login.*;
import app.util.*;
import static spark.Spark.*;
import static spark.debug.DebugScreen.*;

public class Application {

    public static RoomDao roomDao;
    public static MessageDao messageDao;

    public static void main(String[] args) {

        roomDao = new RoomDao();
        messageDao = new MessageDao();

        port(4567);
        staticFiles.location("/public");
        staticFiles.expireTime(600L);
        enableDebugScreen();

        before("*",                  Filters.addTrailingSlashes);
        before("*",                  Filters.handleLocaleChange);

        // Routes
        get(Path.Web.INDEX,          IndexController.serveIndexPage);
        get(Path.Web.ROOMS,          RoomController.fetchAllRooms);
        get(Path.Web.LOGIN,          LoginController.serveLoginPage);
        post(Path.Web.LOGIN,         LoginController.handleLoginPost);
        post(Path.Web.LOGOUT,        LoginController.handleLogoutPost);
        get("*",                     ViewUtil.notFound);

        after("*",                   Filters.addGzipHeader);

    }

}