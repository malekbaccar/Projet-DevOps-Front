# stage 1
FROM node:14 as node

WORKDIR /abdelmalekaccar

COPY . /abdelmalekaccar

RUN npm cache clean --force
RUN npm install --force
RUN npm run build --prod
RUN npm install @angular/cli

# stage 2
FROM nginx:alpine

COPY --from=node /abdelmalekaccar/dist/angular-product-config /usr/share/nginx/html
