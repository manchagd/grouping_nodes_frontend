FROM --platform=linux/amd64 node:20.14.0-alpine

RUN apk add --no-cache bash curl python3 make g++ git

RUN corepack disable && \
    rm -f /usr/local/bin/yarn /usr/local/bin/yarnpkg && \
    npm install -g yarn@1.22.19

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --ignore-platform

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]