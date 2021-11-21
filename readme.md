The application provides an easy overview of fire locations and their average, min and maximum data values for the documented wildfires. By hovering the different regions data will be shown in a box underneath the map. In addition adding new fire data is easily done by clicking add new fire data which pops up an interface for doing so.


This solution solves the difficulty of using tables to visualize the data. This makes seeing where most wildfires physically happens and the average size, humidity, relative humidity and rain for the location easier. 

To run the application you need to download the folder and path to it in a terminal then follow the instructions:
1. npm install
2. npm run server
3. open an additional terminal at the same folder location
4. npm start

this should get both the server and the website up and running.


While making the app I was looking at the data and initially planned to make a table with paging, filtering and sorting. Hence the choice of GraphQL and MaterialUI. After setting up the initial fetch for the data I had an idea and I went with it. I made a map instead. It might not show of as much technical ability but it was much more fun to make and made more sense of the information at a glance for me.


Technologies

Frontend
Apollo Client, React & MaterialUI

The frontend is built with Apollo Client, React and Material UI. Apollo provides easy querying, refetching and mutating with hook functionality for React. MUI has easy to use and complete elements for tables, popups and other UI elements. 

Backend
Express, Apollo Server, GraphQL, MongoDB & Mongoose

The backend is develooped with mongoDB as the database, mongoose to handle schemas and validation for the NoSQL database. The server is an Apollo Server, GraphQL and Express server. Even though I have Mongoose I manage most validation with GraphQL.

