FROM node:boron

WORKDIR /app

RUN npm install -g lerna

COPY package.json /app
#RUN npm install --production

COPY src /app/src
COPY lerna.json /app
COPY .npmrc /app
COPY .babelrc /app
COPY .eslintrc.js /app

EXPOSE 8080

#RUN npm install --production

#RUN npm run build

CMD ["npm", "run", "dev"]
