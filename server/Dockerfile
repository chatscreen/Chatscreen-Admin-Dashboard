FROM node:16-alpine

RUN mkdir /app && chown node:node /app

WORKDIR /app

USER node

COPY --chown=node:node package.json package-lock.json* ./

RUN ["npm","install"]

COPY --chown=node:node . .

EXPOSE 5000

EXPOSE 5001

ENTRYPOINT ["npm","run","start:dev"]
