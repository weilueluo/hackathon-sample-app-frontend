# syntax=docker/dockerfile:1

# stage 1
FROM node:16.13.2-alpine AS build
WORKDIR /app
ENV NODE_ENV=production

COPY --chown=node:node . .
RUN npm ci
RUN npm run build -- --configuration production

USER node


# stage 2
FROM nginx:alpine
COPY --from=build /app/dist/hackathon-app-frontend /usr/share/nginx/html
