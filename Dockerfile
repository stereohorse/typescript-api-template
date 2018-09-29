FROM node:10.11.0-alpine

RUN apk --no-cache add curl

COPY dist dist/
COPY config config/
COPY package.json .
COPY yarn.lock .

RUN yarn install --production --non-interactive --frozen-lockfile

HEALTHCHECK --interval=5s --start-period=2s CMD curl -f http://localhost:3000/srv/health || exit 1
EXPOSE 3000

CMD ["yarn", "start"]