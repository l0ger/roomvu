# Install dependencies only when needed
FROM node:alpine AS deps
#install missed shared library in alpine
RUN apk add --no-cache libc6-compat
WORKDIR /roomvu
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /roomvu
#Copy the current directory . in the project to the workdir . in the image.
COPY . .
COPY --from=deps /roomvu/node_modules ./node_modules
# Do not run package.json scripts( --ignore-scripts)
# Using cache (--prefer-offline)
RUN yarn build && yarn install --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /roomvu

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S roomvu -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /roomvu/next.config.js ./
COPY --from=builder /roomvu/public ./public
COPY --from=builder --chown=roomvu:nodejs /roomvu/.next ./.next
COPY --from=builder /roomvu/node_modules ./node_modules
COPY --from=builder /roomvu/package.json ./package.json

USER roomvu

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]