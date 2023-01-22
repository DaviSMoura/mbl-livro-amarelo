FROM node:16-alpine as build-stage

ENV PORT=8080

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies.
RUN npm i --legacy-peer-deps

# Copy local code to the container image.
COPY . ./

# Build for production
RUN npm run build

# Nginx setup
FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

# Run the web service on container startup.
CMD sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf && nginx -g 'daemon off;'"