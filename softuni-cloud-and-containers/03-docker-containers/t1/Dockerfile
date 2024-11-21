FROM node:20
LABEL AUTHOR="MIRO"

WORKDIR /working_dir

EXPOSE 8080

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "serve" ]

# Sample image creation sequence for a node.js app
