
# FriendFinder Web Application

# App Overview
My FriendFinder application is designed to allow users to fill out a 10-question survey about themselves, and then show the user a friend out of the current list of friends based on their survey results. 

## Code Organization
In FriendFinder the code to inialize the server is organized in the server.js file. The routes to show the home page (home.html) and survey page (survey.html) are organized in the htmlRoutes.js file. The GET and POST requests are located within the apiRoutes.js file. The GET request retrieves the list of friends from the array in friends.js, and the POST route takes the scores from the user data and compares it to the scores of the current list of friends. The friend whose scores closest match the user data is then shown to the user in a modal.

## Instructions to run FriendFinder
1. Access the app at [heroku URL]
2. Click the blue link Go To Survey
3. Fill out the survey and click Submit
4. Your match will display on the page! You can click Close and then click the API Friends List link at the bottom to see the updated list of friends.

## Technologies used
Express
Node
Heroku
Path
Chosen
Bootstrap

## Role in development of the app
I put together this app based on class assignments, code reviews and my own code. 