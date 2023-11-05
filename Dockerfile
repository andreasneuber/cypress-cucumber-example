FROM node:20.9

# Set the work directory for the application
WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY cypress/ /app/cypress/
COPY reports/ /app/reports/
COPY cucumber-html-report.js /app/cucumber-html-report.js
COPY cypress.config.js /app/cypress.config.js
COPY package.json /app/

# Get the needed libraries to run Cypress
RUN apt-get update
RUN apt-get install -y zip wget ca-certificates
RUN apt-get install -y libnss3-dev libasound2 libxss1 libappindicator3-1 gconf-service
RUN apt-get install -y libgconf-2-4 libpango1.0-0 xdg-utils fonts-liberation libgbm1 libu2f-udev libvulkan1
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome*.deb
RUN rm google-chrome*.deb

# Install the dependencies in Node environment
RUN npm install
