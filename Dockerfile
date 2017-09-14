FROM node:boron

RUN npm install -g npm-check-updates

RUN adduser --disabled-password --gecos "" vuematerial
USER vuematerial

WORKDIR /app

COPY src /app/src
COPY build /app/build
COPY config /app/config
COPY test /app/test
COPY package.json /app
COPY .postcssrc.js /app

EXPOSE 8080

CMD ["npm", "run", "build:watch"]
