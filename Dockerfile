FROM node:lts as builder
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=app-docs --docker

FROM node:lts AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn build
FROM node:lts AS runner
WORKDIR /app

COPY --from=installer /app .
EXPOSE 8000
ENV PORT 8000
CMD [ "yarn", "start" ]