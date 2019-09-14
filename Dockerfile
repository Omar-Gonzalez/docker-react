FROM node:10-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install && npm rebuild node-sass && npm run build

FROM nginx:latest
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
