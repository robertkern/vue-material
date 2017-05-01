# Run the container for development
docker run -v "$(pwd)":/app -it --rm --entrypoint bash -p 8082:8080 -e NODE_ENV=development vue-material-components
