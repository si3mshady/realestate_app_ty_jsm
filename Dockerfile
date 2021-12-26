FROM node:current-alpine AS firststep

WORKDIR /app

COPY package* /app

RUN npm install 
COPY . .
# Generate Prod Build of application 

FROM firststep AS buildstage 
WORKDIR /build 

COPY --from=firststep /app ./
RUN npm run build 


#Copy artifacts from build into new image 

FROM node:current-alpine AS prodstage

WORKDIR /app

COPY --from=buildstage /build ./

RUN npm install next

EXPOSE 80

CMD ["npm", "run", "start"]


