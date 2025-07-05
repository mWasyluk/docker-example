FROM node:lts-alpine3.21

WORKDIR /app

COPY ./package.json .
RUN npm i
COPY . .

ENV SERVER_PORT=8000
EXPOSE $SERVER_PORT

CMD ["npm", "start"]
