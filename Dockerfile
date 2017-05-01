FROM node:boron

WORKDIR /app

RUN npm install -g lerna

COPY package.json /app
#RUN npm install --production

COPY demos /app/demos
COPY src /app/src
COPY lerna.json /app
COPY .npmrc /app
COPY .npmrc /app/demos/simple-demo
COPY .npmrc /app/demos/demo
COPY .babelrc /app
COPY .eslintrc.js /app

EXPOSE 8080

#WORKDIR /app/demos/demo
#RUN npm install --production

#RUN npm run build

CMD ["npm", "run", "dev"]
