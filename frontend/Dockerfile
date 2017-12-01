FROM node:8

WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

RUN ["yarn", "install"]

CMD ["yarn", "run", "webpack-dev-server"]
