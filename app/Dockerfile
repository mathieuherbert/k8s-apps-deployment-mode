FROM node:11.9.0-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build
EXPOSE 8080

CMD [ "node", "server.js" ]