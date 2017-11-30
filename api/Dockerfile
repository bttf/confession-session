FROM node:8

WORKDIR /app

ADD package.json /app/package.json

RUN ["yarn", "install"]

EXPOSE 3000

CMD ["yarn", "watch"]
