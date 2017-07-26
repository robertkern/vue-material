# Run the container for development
docker run \
    -v "$(pwd)":/app \
    -it --rm --entrypoint bash \
    -p 8084:8080 \
    -e NODE_ENV=development \
    robertkern/vue-material

# npm publish
