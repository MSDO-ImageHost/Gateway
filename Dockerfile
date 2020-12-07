FROM node:12-alpine
WORKDIR /src
COPY . .
RUN npm install amqplib
CMD ["node", "src/main.js"]