# EatDaBurger

# Overview
My EatDaBurger application is a full stack application that allows the user to view a list of available burgers, and 'devour' the burgers of their choice with the click of a button. Once 'devoured', the burger will no longer be available. The user can also enter in a new burger they would like to create to be made available.

## Organization of code
In EatDaBurger, the code uses the MVC structure; the models directory has my 'burger' model, where I call the 'selectAll', 'updateOne', and 'createOne' methods. The views directory has the Index.handlebars, which generates the HTML code of my app to be housed in the 'body' of the main.handlebars, and also has two subdirectories for the layouts and partials. The Layouts houses the main.handlebars, and the partials houses the burger-block.handlebars. Finally, the controllers directory houses the burgers_controllers.js, which is where my get, put, and post routes are housed in my app.
The config directory houses the orm.js file where my methods are defined, as well as the connection.js file, which initializes the connection to the MySQL database. Lastly, the public directory houses my CSS stylesheet and image files, as well as the javascript which controls the functionality of the HTML page.

## Instructions on running the app
1. Access the app at https://safe-fortress-10929.herokuapp.com/
2. Click 'Devour It!' next to any of the pre-existing burgers to devour the burger.
3. Using the form at the bottom, enter a new burger you would like to create and click Submit to add it to the list.

## Technologies used
Express
Node
Heroku
Bootstrap
MySQL
Handlebars

## Role in development of the app
My role was the principal developer of the application. I wrote all of the code, and executed the deployment of the app.