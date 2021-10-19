FROM node:14

WORKDIR /app

COPY package*.json tsconfig*.json ./
RUN yarn install

COPY templates/ templates/
COPY src/ src/

RUN yarn global add rimraf

RUN yarn build
RUN yarn global add pm2

RUN apt-get update -y
RUN apt-get install -y ffmpeg

RUN  rm -r src

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 4000

CMD [ "pm2-runtime", "dist/main.js" ]
