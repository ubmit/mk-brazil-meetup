# mk-brazil-meetup
A gallery for the keyboards that were exposed at the first brazilian meetup :keyboard:

## About
The idea behind this application was to put together everything I learned related to Node.js, MongoDB, React and Redux.
Definitely it was a good practice!
The production data came from some participants of the meetup and then it was exported to a MongoDB database.
To retrieve this data inside the client, which was built using React, I created Node.js API with some help from Express and Mongoose.
Express was used to set up the API server and also to manage the routes.
Mongoose was basically used to make model-related stuff easier.
Inside React, the data is fetched using Axios and then, before it arrives at a container, it is handled by Redux.
The UI was made using Semantic UI and styled-components.

## Work in progress
* Filter structure - :heavy_check_mark:

## Starting the application

```
yarn install
yarn run dev
```
*However, for security reasons, the mongoURI for my development database is inside .gitignore.
Soon I will provide another mongoURI here, so anyone will be able to run the application locally without problems.
Right now I would recommend you to check [@heroku](https://mk-brazil-meetup.herokuapp.com/)*
