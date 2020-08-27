FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y \
    && apt-get install -y \
    curl

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && apt-get install -y nodejs

RUN npm install -g nodemon

RUN mkdir /valor-rant

WORKDIR /valor-rant

CMD npm install && nodemon .
