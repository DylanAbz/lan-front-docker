FROM node:20.19.0
WORKDIR /app
RUN npm install -g serve
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 1992
CMD ["serve", "-s", "dist", "-l", "1992"]
