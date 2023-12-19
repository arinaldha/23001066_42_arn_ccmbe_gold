# Instalation With docker

1. adjust your env file (you can copy paste from `.env.example` file)
2. adjust your database connection in env file
3. create file with name `docker-compose.yml` (you can copy paste from `docker-compose.yml.example` file)
4. adjust ports in your `docker-compose.yml` file
5. run command `docker compose build ccmbe` in your root folder project path
6. run command `docker compose up -d` in your root folder project path
7. run command `docker exec -it ccmbe knex migrate:latest` in your root folder project path
8. run command `docker exec -it ccmbe knex seed:run` in your root folder project path
9. Instalation Complete!

# Instalation Without docker

1. Make sure you already install knex on your device
2. adjust your env file (you can copy paste from `.env.example` file)
3. adjust your database connection in env file
4. run command `npm i` in your root folder project path
5. run command `knex migrate:latest` in your root folder project path
6. run command `knex seed:run` in your root folder project path
7. run command `npm run start` in your root folder project path
8. Instalation Complete!
