# Use the official Nginx image as the base
FROM nginx:latest

# Copy the static HTML files to the appropriate location
COPY . /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80
