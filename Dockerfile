#Stage 1
FROM node:21-alpine as builder

ARG API_URL
ENV VITE_API_URL=${API_URL}

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.27.0-alpine

#ENV API_URL=$API_URL

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]