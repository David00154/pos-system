FROM node:16-alpine3.15
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD [ "npm", "start" ]