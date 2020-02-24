FROM node:alpine
WORKDIR /quiz-app
ENV PATH /quiz-app/node_modules/.bin:$PATH
COPY . /quiz-app
EXPOSE 4200
RUN npm install
RUN npm install -g @angular/cli
CMD ng serve --host 0.0.0.0