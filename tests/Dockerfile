# Use an official Node.js runtime as a parent image
FROM node:18
  
# Set the working directory in the container
WORKDIR /app
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
 
# Install app dependencies
RUN npm install
 
# Bundle app source
COPY . .
 
# Command to run your tests
CMD ["npm", "test"]
 
 