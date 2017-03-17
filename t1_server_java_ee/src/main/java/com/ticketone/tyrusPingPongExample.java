/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2012-2015 Oracle and/or its affiliates. All rights reserved.
 *
 * The contents of this file are subject to the terms of either the GNU
 * General Public License Version 2 only ("GPL") or the Common Development
 * and Distribution License("CDDL") (collectively, the "License").  You
 * may not use this file except in compliance with the License.  You can
 * obtain a copy of the License at
 * http://glassfish.java.net/public/CDDL+GPL_1_1.html
 * or packager/legal/LICENSE.txt.  See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * When distributing the software, include this License Header Notice in each
 * file and include the License file at packager/legal/LICENSE.txt.
 *
 * GPL Classpath Exception:
 * Oracle designates this particular file as subject to the "Classpath"
 * exception as provided by Oracle in the GPL Version 2 section of the License
 * file that accompanied this code.
 *
 * Modifications:
 * If applicable, add the following below the License Header, with the fields
 * enclosed by brackets [] replaced by your own identifying information:
 * "Portions Copyright [year] [name of copyright owner]"
 *
 * Contributor(s):
 * If you wish your version of this file to be governed by only the CDDL or
 * only the GPL Version 2, indicate your decision by adding "[Contributor]
 * elects to include this software in this distribution under the [CDDL or GPL
 * Version 2] license."  If you don't indicate a single choice of license, a
 * recipient has the option to distribute your version of this file under
 * either the CDDL, the GPL Version 2 or to extend the choice of license to
 * its licensees as provided above.  However, if you add GPL Version 2 code
 * and therefore, elected the GPL Version 2 license, then the option applies
 * only if the new code is made subject to such option by the copyright
 * holder.
 */
package org.glassfish.tyrus.test.standard_config;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import javax.websocket.ClientEndpointConfig;
import javax.websocket.DeploymentException;
import javax.websocket.Endpoint;
import javax.websocket.EndpointConfig;
import javax.websocket.MessageHandler;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.PongMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.glassfish.tyrus.client.ClientManager;
import org.glassfish.tyrus.server.Server;
import org.glassfish.tyrus.test.tools.TestContainer;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;


/**
 * Tests sending and receiving ping and pongs
 *
 * @author Pavel Bucek (pavel.bucek at oracle.com)
 */
public class PingPongTest extends TestContainer {

    private static final String PONG_RECEIVED = "PONG RECEIVED";

    @ServerEndpoint(value = "/pingpong")
    public static class PingPongEndpoint {

        @OnMessage
        public void onPong(PongMessage pongMessage, Session session) {
            System.out.println("### PingPongEndpoint - received pong \""
                                       + new String(pongMessage.getApplicationData().array()) + "\"");
            if (pongMessage.getApplicationData().equals(ByteBuffer.wrap("ping message server".getBytes()))) {
                try {
                    session.getBasicRemote().sendText(PONG_RECEIVED);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        @OnMessage
        public void onMessage(Session session, String message) throws IOException {
            System.out.println("### PingPongEndpoint - sending ping \"ping message server\"");
            session.getBasicRemote().sendPing(ByteBuffer.wrap("ping message server".getBytes()));
        }
    }

    @Test
    public void testPongClient() throws DeploymentException {
        Server server = startServer(PingPongEndpoint.class);

        try {
            final CountDownLatch messageLatch = new CountDownLatch(1);

            ClientManager client = createClient();
            client.connectToServer(new Endpoint() {
                @Override
                public void onOpen(Session session, EndpointConfig config) {
                    try {
                        session.addMessageHandler(new MessageHandler.Whole<PongMessage>() {
                            @Override
                            public void onMessage(PongMessage message) {
                                System.out.println("### Client - received pong \""
                                                           + new String(message.getApplicationData().array()) + "\"");
                                if (message.getApplicationData()
                                           .equals(ByteBuffer.wrap("ping message client".getBytes()))) {
                                    messageLatch.countDown();
                                }
                            }
                        });

                        System.out.println("### Client - sending ping \"ping message client\"");
                        session.getBasicRemote().sendPing(ByteBuffer.wrap("ping message client".getBytes()));

                    } catch (IOException e) {
                        // do nothing.
                    }
                }
            }, ClientEndpointConfig.Builder.create().build(), getURI(PingPongEndpoint.class));

            messageLatch.await(1, TimeUnit.SECONDS);
            assertEquals(0, messageLatch.getCount());

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage(), e);
        } finally {
            stopServer(server);
        }
    }

    @Test
    public void testPongServer() throws DeploymentException {
        Server server = startServer(PingPongEndpoint.class);

        try {
            final CountDownLatch messageLatch = new CountDownLatch(1);

            ClientManager client = createClient();
            client.connectToServer(new Endpoint() {
                @Override
                public void onOpen(Session session, EndpointConfig config) {
                    try {
                        session.addMessageHandler(new MessageHandler.Whole<String>() {
                            @Override
                            public void onMessage(String message) {
                                if (message.equals(PONG_RECEIVED)) {
                                    messageLatch.countDown();
                                }
                            }
                        });
                        session.getBasicRemote().sendText("ping-initiator");
                    } catch (IOException e) {
                        // do nothing.
                    }
                }
            }, ClientEndpointConfig.Builder.create().build(), getURI(PingPongEndpoint.class));

            assertTrue(messageLatch.await(2, TimeUnit.SECONDS));
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage(), e);
        } finally {
            stopServer(server);
        }
    }

    @Test
    public void testPongClientNoData() throws DeploymentException {
        Server server = startServer(PingPongEndpointNoData.class);

        try {
            final CountDownLatch messageLatch = new CountDownLatch(1);

            ClientManager client = createClient();
            client.connectToServer(new Endpoint() {
                @Override
                public void onOpen(Session session, EndpointConfig config) {
                    try {
                        session.addMessageHandler(new MessageHandler.Whole<PongMessage>() {
                            @Override
                            public void onMessage(PongMessage message) {
                                System.out.println("### Client - received pong \""
                                                           + new String(message.getApplicationData().array()) + "\"");
                                if (message.getApplicationData().equals(ByteBuffer.wrap("".getBytes()))) {
                                    messageLatch.countDown();
                                }
                            }
                        });

                        System.out.println("### Client - sending ping \"\"");
                        session.getBasicRemote().sendPing(null);

                    } catch (IOException e) {
                        // do nothing.
                    }
                }
            }, ClientEndpointConfig.Builder.create().build(), getURI(PingPongEndpointNoData.class));

            messageLatch.await(1, TimeUnit.SECONDS);
            assertEquals(0, messageLatch.getCount());

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage(), e);
        } finally {
            stopServer(server);
        }
    }

    @Test
    public void testPongServerNoData() throws DeploymentException {
        Server server = startServer(PingPongEndpointNoData.class);

        try {
            final CountDownLatch messageLatch = new CountDownLatch(1);

            ClientManager client = createClient();
            client.connectToServer(new Endpoint() {
                @Override
                public void onOpen(Session session, EndpointConfig config) {
                    try {
                        session.addMessageHandler(new MessageHandler.Whole<String>() {
                            @Override
                            public void onMessage(String message) {
                                if (message.equals(PONG_RECEIVED)) {
                                    messageLatch.countDown();
                                }
                            }
                        });
                        session.getBasicRemote().sendText("ping-initiator");
                    } catch (IOException e) {
                        // do nothing.
                    }
                }
            }, ClientEndpointConfig.Builder.create().build(), getURI(PingPongEndpointNoData.class));

            messageLatch.await(2, TimeUnit.SECONDS);
            assertEquals(0, messageLatch.getCount());

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage(), e);
        } finally {
            stopServer(server);
        }
    }

    @ServerEndpoint(value = "/pingpongnodata")
    public static class PingPongEndpointNoData {

        @OnMessage
        public void onPong(PongMessage pongMessage, Session session) {
            System.out.println(
                    "### PingPongEndpoint - received pong \"" + new String(pongMessage.getApplicationData().array())
                            + "\"");
            if (pongMessage.getApplicationData().equals(ByteBuffer.wrap("".getBytes()))) {
                try {
                    session.getBasicRemote().sendText(PONG_RECEIVED);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        @OnMessage
        public void onMessage(Session session, String message) throws IOException {
            System.out.println("### PingPongEndpoint - sending ping \"\"");
            session.getBasicRemote().sendPing(null);
        }
    }

    @Test
    public void testLimits() throws DeploymentException {
        Server server = startServer(PingPongEndpoint.class);

        try {

            ClientManager client = createClient();
            final Session session = client.connectToServer(new Endpoint() {
                @Override
                public void onOpen(Session session, EndpointConfig config) {
                    // do nothing.
                }
            }, ClientEndpointConfig.Builder.create().build(), getURI(PingPongEndpoint.class));

            session.getBasicRemote().sendPing(
                    ByteBuffer.wrap(("1234567890123456789012345678901234567890123456789012345678901234567890123456789"
                            + "0123456789012345678901234567890123456789012345").getBytes()));
            try {
                session.getBasicRemote().sendPing(
                        ByteBuffer.wrap(("123456789012345678901234567890123456789012345678901234567890123456789012345"
                                + "678901234567890123456789012345678901234567890123456").getBytes()));
                fail();
            } catch (IllegalArgumentException e) {
                // ignore
            }
            session.getBasicRemote().sendPong(
                    ByteBuffer.wrap(("1234567890123456789012345678901234567890123456789012345678901234567890123456789"
                            + "0123456789012345678901234567890123456789012345").getBytes()));
            try {
                session.getBasicRemote().sendPong(
                        ByteBuffer.wrap(("123456789012345678901234567890123456789012345678901234567890123456789012345"
                                + "678901234567890123456789012345678901234567890123456").getBytes()));
                fail();
            } catch (IllegalArgumentException e) {
                // ignore
            }

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage(), e);
        } finally {
            stopServer(server);
        }
    }

    @ServerEndpoint("/pongHandlerException")
    public static class PongHandlerExceptionEndpoint implements MessageHandler.Whole<PongMessage> {

        private volatile Session session;

        @OnOpen
        public void onOpen(Session session) {
            this.session = session;
            session.addMessageHandler(PongMessage.class, this);
        }

        @Override
        public void onMessage(PongMessage message) {
            session.addMessageHandler(PongMessage.class, this);
        }

        @OnError
        public void onError(Session session, Throwable t) throws IOException {
            session.getBasicRemote().sendText("exception");
        }
    }

    @Test
    public void testPongHandlerException() throws DeploymentException, IOException, InterruptedException {
        Server server = startServer(PongHandlerExceptionEndpoint.class);

        try {
            ClientManager client = createClient();
            final CountDownLatch messageLatch = new CountDownLatch(1);

            final Session session = client.connectToServer(new Endpoint() {
                @Override
                public void onOpen(Session session, EndpointConfig config) {
                    session.addMessageHandler(String.class, new MessageHandler.Whole<String>() {
                        @Override
                        public void onMessage(String message) {
                            if ("exception".equals(message)) {
                                messageLatch.countDown();
                            }
                        }
                    });
                }
            }, ClientEndpointConfig.Builder.create().build(), getURI(PongHandlerExceptionEndpoint.class));

            session.getBasicRemote().sendPong(ByteBuffer.wrap("asdfghjkl".getBytes(Charset.defaultCharset())));

            assertTrue(messageLatch.await(5, TimeUnit.SECONDS));
        } finally {
            stopServer(server);
        }
    }
}