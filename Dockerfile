FROM node:14.17.6

WORKDIR /usr/src/app

ARG DATABASE_URL

ENV DATABASE_URL $DATABASE_URL

COPY . .

RUN yarn install && yarn prisma generate 

RUN yarn prisma migrate deploy

RUN yarn cache clean

EXPOSE 3000
CMD [ "node", "src/server.js" ]
