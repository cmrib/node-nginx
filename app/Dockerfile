FROM node:14-buster

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]