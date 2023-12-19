FROM node:16-alpine

# Bundle APP files
COPY . app

WORKDIR /app

COPY package*.json ./

# RUN chmod 777 wait-for-db.sh

# Install app dependencies
RUN npm install

# Install knex
RUN npm i knex -g

COPY . .

# Expose the listening port of your app
EXPOSE 3000

# Show current folder structure in logs
# RUN ls -al -R

CMD [ "npm", "start" ]
