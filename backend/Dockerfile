FROM node:16
ENV TZ="Europe/Budapest"

RUN mkdir /simonyi-web-back
WORKDIR /simonyi-web-back

COPY package.json .
COPY yarn.lock .
COPY .env .

RUN yarn install
COPY . .
RUN yarn build
CMD yarn start
