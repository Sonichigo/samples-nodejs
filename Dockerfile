FROM node:18

RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates && \
    rm -rf /var/lib/apt/lists/* 

WORKDIR /app
# Set the working directory inside the container
COPY package*.json ./

COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source

EXPOSE 3000
CMD [ "node", "index.js" ]