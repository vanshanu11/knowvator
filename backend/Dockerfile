# -------- Stage 1: Build deps (production only) --------
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Use --omit=dev to install only production deps
RUN npm ci --omit=dev

# -------- Final image --------
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
