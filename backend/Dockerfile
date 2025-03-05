FROM node:18-alpine

ARG DOCKERFILE_PORT

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${DOCKERFILE_PORT}

CMD ["npm", "run", "dev"]