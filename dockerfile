# Use the official Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:16

# Create and change to the app directory.
WORKDIR /usr/src/app


COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Expose port 3000 to the outside once the container has launched.
EXPOSE 3000

# Run the web service on container startup.
CMD [ "node", "scr/index.js" ]
