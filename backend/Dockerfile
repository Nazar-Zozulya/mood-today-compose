FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Генерация Prisma Client внутри контейнера
RUN npx prisma generate

EXPOSE 8000

# При старте создаём БД + применяем миграции + запускаем сервер
CMD npx prisma migrate dev --name init && npm run server
