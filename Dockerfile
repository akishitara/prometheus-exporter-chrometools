FROM node:12.3.1-stretch

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list
RUN apt update && apt install -y -q google-chrome-stable
ADD . /home/node/app
WORKDIR /home/node/app
RUN npm install 
RUN ./node_modules/typescript/bin/tsc
CMD ["node", "dist/index.js"]

