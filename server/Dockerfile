
FROM node:20


WORKDIR /app


COPY package.json yarn.lock ./


RUN corepack enable

RUN yarn install


COPY . .


ENV PORT=3000


EXPOSE 3000

# Step 8: Run the app
CMD ["yarn", "start"]