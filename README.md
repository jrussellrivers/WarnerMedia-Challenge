# WarnerMedia Developer Challenge

This project was assigned to me by WarnerMedia for a job interview. I was given 24 hours to complete the project after I received it.

## Project Requirements:

* Display a web page that allow a user to:
    * Search for a Title by its name or fragment.
    * Display the titles that match the above criteria.
    * Pull up detailed information about a selected title from the list.
* Use https://rapidapi.com/amrelrafie/api/movies-tvshows-data-imdb as the API data source.
* Technology Stack
    * Node.js (required) Web Server, MongoDB interface and API
    * ReactJS (required) The web front end templates should be in React.
* Optional
    * Feel free to host the app somewhere (Azure, EC2, AppHarbor, etc.)

## Project Description

This Project uses a Node.js backend that handles user creation and login with MongoDB. The frontend is made using ReactJS and Redux to handle api calls. After registering or logging in, a user can search for movie titles by name. The website then makes API calls to fetch all movies that match the name critia. Then for each movie, two additional API calls are made to aqcuire movie details and the movie's poster image. 

Once the movies are loaded to the page, cards are rendered for each movie that contain the movie poster, minor information about the movie, as well as a link for more details. Once the link is clicked, a modal appears to display more detailed information about the movie.
