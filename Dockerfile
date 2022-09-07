# DockerFile for Node
FROM node:18.7.0
LABEL description="Practice working with Docker and OOD with TypeScript"

# Copy the source code to the server
COPY package*.json ./
RUN ["npm", "install"]
COPY . .

# Expose port and run the node script
EXPOSE 8990
ENTRYPOINT ["npm", "run"]
CMD ["start:dev"]