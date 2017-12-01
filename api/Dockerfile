FROM node:8

WORKDIR /app

ADD package.json /app/package.json

RUN ["yarn", "install"]

RUN ls node_modules | grep db-migrate-pg

EXPOSE 3000

CMD ["yarn", "watch"]
