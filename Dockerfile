# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Install a lightweight web server to serve the built app
RUN npm install -g serve

# Set the command to start the web server and serve the built app
CMD ["serve", "-s", "build"]

# Expose the port on which the app will run
EXPOSE 3000
