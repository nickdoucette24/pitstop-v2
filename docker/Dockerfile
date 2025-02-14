# Use the official Node.js image as the base
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight server to serve the built files
FROM node:18-alpine AS serve
WORKDIR /app
COPY --from=build /app/build ./build

# Install Serve (for static file hosting)
RUN npm install -g serve

# Expose port 3000 for frontend
EXPOSE 3000

# Start the app using Serve
CMD ["serve", "-s", "build", "-l", "3000"]
