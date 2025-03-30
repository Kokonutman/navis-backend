# Use official Node.js image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Expose port (match the one your app uses, like 5000)
EXPOSE 5000

# Start your app
CMD ["node", "server.js"]
