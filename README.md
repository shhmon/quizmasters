# quizmasters
**A quiz application for Web Programming course @ LTH**


**Start the app and server with [Docker](https://www.docker.com/products/docker-desktop)**

Run the whole stack at http://localhost:

`docker-compose up`

If you encounter any errors after a pull, run this instead:

`docker-compose up --build --force-recreate server quiz-app`

If you have trouble with node packages not being installed in the Angular container:

`docker exec -t -i quizmasters_quiz-app_1 npm install`

**Start the app and server without Docker:**

Server:

```
cd server
pip3 install requirements.txt
python3 app.py
```

Angular App:

```
cd quiz-app
ng serve --host 0.0.0.0
```


#### To do:
- [x] Convert urbandict dataset to desired format:
  - [ word_id, word, up_votes, down_votes, definition, score ]
  - score column desribes "normalized" ratio between up and down votes (0 = 50% up votes, 1 = 100% up votes)
- [x] Create REST API to serve the data (Flask)
- [x] Wrap this all up in a docker build
- [x] Create quiz application with Angular:
  - Get definition of word => fetch three similar (or just random) words for user to choose between => get score for guessing right based on up/down vote ratio
- [x] Make the score show in highscore tab
