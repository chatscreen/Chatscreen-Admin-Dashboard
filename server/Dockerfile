FROM node:16-alpine
WORKDIR /app
COPY . /app
EXPOSE 5000
EXPOSE 5001
RUN ["npm","install"]
ENTRYPOINT ["npm","run","start:dev"]