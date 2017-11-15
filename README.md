:construction: WORK IN PROGRESS (partial TODO in docs folder) :construction:

Current client version: 1.0.6

### TicketOne client

1. Client - React v16 / React-Router v4 / Redux v3

2. Node.js server mock - Express v4

3. Java server - Spring Boot v1.5 (+ H2, JPA, WebSocket, AspectJ)

4. .NET server - ASP .NET Core 2.0 API

Recommended IDE: Visual Studio Code / IntelliJ Idea / Visual Studio 2017

[ v1.0.5 Deployed with Node.js server mock on Heroku ticketone.herokuapp.com](https://ticketone.herokuapp.com) (slow server!)

##### Client NPM scripts

Folder '*t1_client_react*'

* '*yarn start*' - run development mode

* '*yarn build*' - create production bundle

* '*yarn test*' - run test watch

* '*yarn test-without-dom*' - run test watch without DOM

* '*yarn coverage*' - analyze test code coverage (report generated to ./coverage/lcov-report/index.html)

### To run locally with Node.js mock server:

1. Install [Node.js v7](https://nodejs.org/en/) and run '*npm i -g yarn*'

2. Run '*yarn*' in folder '*t1_server_node*'

3. Run '*yarn start*' in folder '*t1_server_node*'

4. Login on one browser as Employee and on another browser as Client. (Hit F5 to "logout" from fake session)

### To run locally with Java server:

1. Make sure your have Maven 3 and JDK 8 installed properly

2. Run '*mvn clean package*' and then '*mvn spring-boot:run*' in folder '*t1-server-java*'

Swagger enabled on '*/swagger-ui.html*'
