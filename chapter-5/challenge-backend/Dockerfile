FROM node:16-alpine

ENV PORT=$port
ENV NODE_ENV=production

EXPOSE $PORT

WORKDIR /app
COPY package.json ./
RUN apk add g++ make py3-pip
RUN yarn install --production=true && yarn cache clean --force
RUN apk add --no-cache tini
COPY . .
CMD ["yarn", "run", "start"]