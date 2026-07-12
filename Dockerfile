# Stage 1: Install all dependencies (including devDependencies for Cypress)
FROM node:24-slim AS builder

WORKDIR /app

ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force

# Stage 2: Runtime
FROM node:24-slim

# Install Cypress system dependencies and Chrome
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    zip wget ca-certificates \
    libnss3-dev libasound2t64 libxss1 libappindicator3-1 \
    libgconf-2-4 libpango1.0-0 xdg-utils fonts-liberation libgbm1 libu2f-udev libvulkan1 \
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxtst6 xauth xvfb && \
    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg -i google-chrome*.deb && \
    rm google-chrome*.deb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH \
    CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

# Copy node_modules (includes Cypress) and Cypress binary cache from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /root/.cache/Cypress /root/.cache/Cypress

# Copy application source files
COPY cypress.config.js ./
COPY cucumber-html-report.js ./
COPY cypress/ ./cypress/
COPY package.json ./

RUN mkdir -p /app/reports

CMD ["npm", "run", "test"]
