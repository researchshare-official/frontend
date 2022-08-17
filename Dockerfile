FROM docker.io/node:16-alpine AS builder
COPY . /app
WORKDIR /app
RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false
RUN yarn build
RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM docker.io/node:16-alpine
RUN addgroup -S erudia-frontend && adduser -S erudia-frontend -G erudia-frontend
RUN apk add --no-cache tini
USER erudia-frontend
WORKDIR /app
COPY --from=builder --chown=erudia-frontend:erudia-frontend /app  .
ENV HOST 0.0.0.0
ENV PORT 80
EXPOSE 80
ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "yarn", "start" ]
