FROM quay.io/ibmgaragecloud/node:lts-stretch

WORKDIR /app
COPY package*.json .
COPY src ./src
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]