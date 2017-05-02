FROM node:boron

RUN adduser --disabled-password --gecos "" vuematerial
USER vuematerial

WORKDIR /app

COPY package.json /app
#RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev"]
