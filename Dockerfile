# Stage 1: Dependencies
FROM node:20.11-slim AS dependencies

# Set the work directory
WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Stage 2: Build with dev dependencies
FROM node:20.11-slim AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including dev)
RUN npm ci && npm cache clean --force

# Copy source files
COPY cypress.config.js ./
COPY cucumber-html-report.js ./
COPY cypress/ ./cypress/

# Stage 3: Runtime
FROM node:20.11-slim

# Install Cypress system dependencies and Chrome
RUN apt-get update && \
    apt-get install -y \
    zip wget ca-certificates \
    libnss3-dev libasound2 libxss1 libappindicator3-1 \
    libgconf-2-4 libpango1.0-0 xdg-utils fonts-liberation libgbm1 libu2f-udev libvulkan1 \
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxtst6 xauth xvfb && \
    wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg -i google-chrome*.deb && \
    rm google-chrome*.deb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the work directory
WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH=/app/node_modules/.bin:$PATH \
    CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

# Copy dependencies from dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application files from builder
COPY --from=builder /app/cypress.config.js ./
COPY --from=builder /app/cucumber-html-report.js ./
COPY --from=builder /app/cypress ./cypress

# Copy package.json for metadata
COPY package.json ./

# Create reports directory
RUN mkdir -p /app/reports

# Set default command
CMD ["npm", "run", "test"]
