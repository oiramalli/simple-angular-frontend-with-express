FROM node:lts-alpine
RUN mkdir /main-app
WORKDIR /main-app
COPY package.json /main-app/
RUN npm install
COPY . /main-app/
EXPOSE 3000
CMD [ "node",  "index.js" ]