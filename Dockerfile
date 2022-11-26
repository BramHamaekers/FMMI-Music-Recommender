FROM node:latest
WORKDIR /usr/MMI-Music-Recommender
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3460
CMD ["npm", "run", "dev"]