FROM node:16-alpine

WORKDIR /app
COPY . /app

RUN yarn install --silent
RUN yarn build

# Variables
ARG PORT
ENV PORT  ${PORT:-3000}

EXPOSE ${PORT:-3000}

CMD yarn start

