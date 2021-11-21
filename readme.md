The application provides an easy overview of fire locations and their average, min and maximum data values for the documented wildfires. By hovering the different regionsdata will be shown in a box underneath the map. 


This solution solves the difficulty of using tables to visualize the data. This solution makes seeing where most wildfires physically happens and the average size, humidity, relative humidity and rain for the location easier. 

To run the application you need to download the folder FireWatch_andreas.
Path to /FireWatch_andreas/ and then run: 
1. npm install
2. npm run server
3. open an additional terminal at the same folder location
4. npm start

this should get both the server and the website up and running.



Technologies

Frontend
    The frontend is built with Apollo Client, React and Material UI. Apollo provides easy querying, refetching and mutating with hook functionality for React. MUI has easy to use and complete elements for tables, popups and other UI elements.

Backend
    The backend is develooped with mongoDB as the database, mongoose to handle schemas and validation for the NoSQL database. The server is an Apollo Server, GraphQL and Express server. 

    Apollo server, express, GraphQL
    MongoDB & Mongoose