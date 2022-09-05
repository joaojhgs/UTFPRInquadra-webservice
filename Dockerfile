FROM node:14.17.6-slim

WORKDIR /usr/src/app

ARG DATABASE_URL

ENV DATABASE_URL $DATABASE_URL

COPY . .

RUN yarn install && yarn prisma generate

RUN yarn cache clean

EXPOSE 3000
CMD [ "node", "server.js" ]
