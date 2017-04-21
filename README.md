## TicketOne client

WORK IN PROGRESS

Client - React v15.5 / React-Router v4.1 / Redux v3.6

Node.js server mock - Express v4.15

Java server - Spring Boot 1.5

.NET server - .NET Core 2.0 // for comparision with Java "developer experience"

Recommended IDE: Visual Studio Code / IntelliJ Idea / Visual Studio 2017

[Deployed with Node.js server mock on Heroku ticketone.herokuapp.com](https://ticketone.herokuapp.com) (slow server!)

## Client NPM scripts

start - run development mode

build - create production bundle

test - run test watch

test-without-dom - run test watch without DOM

coverage - analyze test code coverage (report generated to ./coverage/lcov-report/index.html)

## To run locally with Node.js mock server:

1. Install Node.js v7 [Node.js v7](https://nodejs.org/en/) and run 'npm i -g yarn'

2. Run 'yarn' in folder 't1_server_node'

3. Run 'yarn start' in folder 't1_server_node'

4. Login on one browser as Employee and on another browser as Client. (Hit F5 to "logout" from fake session)

## To run locally with Java server:

WORK IN PROGRESS

1. Make sure your have Maven 3 and Java JDK 1.8 installed properly

2. Run 'mvn clean package' and then 'mvn spring-boot:run' in folder 't1-server-java'

## To run locally with .NET server:

WORK IN PROGRESS
