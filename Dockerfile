FROM node:12
COPY . .
ARG PORT=8080
RUN yarn
RUN yarn build
CMD yarn start
