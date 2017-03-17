public void bootstrap() {
        WebSocketContainer webSocketContainer = null;
        try {
            webSocketContainer = ContainerProvider.getWebSocketContainer();
            session = webSocketContainer.connectToServer(StockTickerClient.class, new URI(WS_SERVER_URL));

            System.out.println("Connected to WS endpoint " + WS_SERVER_URL);
            session.addMessageHandler(new MessageHandler.Whole<String>() {

                @Override
                public void onMessage(String msg) {
                    tickRepo.save(msg.split(":")[0], msg.split(":")[1]);
                }
            });
        } catch (DeploymentException | IOException | URISyntaxException ex) {
            Logger.getLogger(StockServiceBootstrapBean.class.getName()).log(Level.SEVERE, null, ex);
        }
    }