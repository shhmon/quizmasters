# Dockermiljö för flask api

## Bygga miljön

`$ docker build -t server:latest .`

## Starta miljön

Utan output
`$ docker run -d -p 5000:5000 server:latest`

## Se miljöer som körs

`$ docker ps`

## Stäng miljö

`$ docker kill *id*`
