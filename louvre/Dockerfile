FROM node:8

WORKDIR /app

ADD package.json /app/package.json

RUN ["yarn", "install"]

CMD ["yarn", "watch"]
