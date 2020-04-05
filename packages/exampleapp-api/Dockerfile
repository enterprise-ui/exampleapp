FROM node:12.16.1-alpine

RUN apk --no-cache add ca-certificates

ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json ./

COPY dist dist

RUN yarn

RUN chown node:node -R /home/app \
   && chmod 777 /tmp

EXPOSE 8080

USER node

RUN touch /tmp/.lock

CMD ["yarn", "start"]
