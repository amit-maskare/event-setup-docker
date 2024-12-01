# Step 1: Use official Node.js image as base image
FROM node:18-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Install global dependencies (Nest CLI)
RUN npm install -g @nestjs/cli

# Step 4: Copy package.json and package-lock.json
COPY package*.json ./

# Step 5: Install application dependencies
RUN npm install

# Step 6: Copy the entire application
COPY . .

# Step 7: Build the NestJS application
RUN npm run build

# Step 8: Expose port for the application
EXPOSE 3000

# Step 9: Start the application
CMD ["npm", "run", "start:prod"]
