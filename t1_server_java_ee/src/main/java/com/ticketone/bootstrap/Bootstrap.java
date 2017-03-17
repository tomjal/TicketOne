package com.ticketone.bootstrap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.ejb.EJB.*;
import java.io.IOException;
import java.util.Properties;

@Singleton
@LocalBean
@Startup
public class Bootstrap {

    private final static Logger log = LoggerFactory.getLogger(Bootstrap.class);

    @EJB
    private DbConnector dbConnector;

    @PostConstruct
    @TransactionAttribute(TransactionAttributeType.NEVER)
    public void bootstrap() {
        try {
            Properties properties = new Properties();
            properties.load(this.getClass().getResourceAsStream("/server.conf"));

            //dbConnector.createDB();
        } catch (IOException e) {
            log.error("Can't load properties", e);
        }
    }
}
