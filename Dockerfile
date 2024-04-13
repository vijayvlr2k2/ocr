# Use a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the ocr.js file to the working directory
COPY ocr.js .

# Install any dependencies required by ocr.js
RUN npm install

# Specify the command to run when the container starts
CMD ["node", "ocr.js"]