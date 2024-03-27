FROM node:alpine

WORKDIR /frontend

COPY package.json .

RUN yarn install

COPY . .

RUN ls
RUN yarn run build
EXPOSE 4173
CMD ["yarn", "serve"]