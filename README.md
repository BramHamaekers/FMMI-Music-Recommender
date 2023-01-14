# FMMI-Music-Recommender

All commands in the following tutorial have to be executed in the home directory of the app (FMMI-Music-Recommender)

First to build the application the docker build command has to be executed:
docker build -t group6-music-recommender .

Afterwards the application can be run using the following command:
docker run --name group6-music-recommender -p 3460:3460 group6-music-recommender

If you want to temporarily shut down the application the following command can be used:
docker stop group6-music-recommender

Afterwards, if you want to permanently delete the application this can be done using the follwing command:
docker rm group6-music-recommender

Currently the app is also being run on the Picasso server on the following links (there are 2 links, since there are two design conditions, so for counterbalancing a latin square was used):
http://picasso.experiments.cs.kuleuven.be:3460/A
http://picasso.experiments.cs.kuleuven.be:3460/B
