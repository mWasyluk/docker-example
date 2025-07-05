FROM node:lts-alpine3.21

WORKDIR /app

COPY ./package.json .
RUN npm i
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
