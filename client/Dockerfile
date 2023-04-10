FROM node:16-alpine3.11
WORKDIR /app
COPY . /app
RUN ["npm","install"]
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
EXPOSE 3000
ENTRYPOINT ["npm","start"]

