# syntax=docker/dockerfile:1

FROM node:20
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "./index.js"]
EXPOSE 4000