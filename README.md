# :hamburger: Eat Da Burger!


### Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!
Please check out the launched app on Heroku [here](http://eat-da-burgerz.herokuapp.com/)!


### Functionality
Using an home-grown ORM, the app has 3 basic CRUD functions...
  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
  2. UPDATE a selected burger by clicking "Devour It", which...
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. CREATE a new burger using the "Place Order" form, which...
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)


### Just for Fun
The app also has a funny "Whine" feature, where random sound effects are played to grieve a devoured burger. This feature uses jQuery click listeners.

Lastly, the app's front-end design uses Bootstrap. This means that your burgers look just as tasty on mobile as they do on desktop. Please see the screenshots below...


### Screenshots
- Desktop View
  * ![Full Size](/screenshots/fullsize.png)


- Mobile View
  * ![Mobile Size](/screenshots/mobile.png)