# Use a base image with Node.js installed
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose a port (optional, if your React app needs to be accessed externally)
EXPOSE 3000

# Define the command to run the React app
CMD ["npm", "start"]
