# DockerFile for Node
FROM node:18.7.0


# Copy the source code to the server
COPY package*.json ./
RUN npm install
COPY . .

# Expose port 8080 and run the node script
EXPOSE 8990
CMD npm run start:dev