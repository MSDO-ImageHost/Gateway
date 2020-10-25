FROM node:latest


COPY . .

EXPOSE 80
EXPOSE 3000


CMD node app.js
