#Stage 1
FROM node:21-alpine as builder

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
COPY .env.example .env
RUN npm run build

#Stage 2
FROM nginx:1.27.0-alpine


WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
COPY --from=builder /app/.env .env
ENTRYPOINT ["nginx", "-g", "daemon off;"]