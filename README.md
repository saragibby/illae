#ILLAE - landing page
Using passport as authentication method

##Folder structure
- app
------ models
---------- user.js  <!-- user model -->
------ routes.js    <!-- all the routes for our application -->
- config
------ auth.js      <!-- will hold all our client secret keys (facebook, twitter, google) -->
------ database.js  <!-- will hold our database connection settings -->
------ passport.js  <!-- configuring the strategies for passport -->
- views
------ index.ejs    <!-- show home page with login links -->
------ login.ejs    <!-- show login form (only needed for local login) -->
------ signup.ejs   <!-- show signup form (only needed for local signup) -->
------ profile.ejs  <!-- after a user logs in, they will see their profile -->
- package.json      <!-- handle npm packages -->
- server.js         <!-- setup application -->

##Deployment
`node server.js` to run the page at `localhost:8080`

##Signup 
now you can use `/signup` to signup a new account to local session 

##Screenshots
- Landing page
![Image of landing page]
(https://github.com/ilooklike/illae/blob/master/screenshots/mainscreen.png)

- Signup page
![!Image of signup page]
(https://github.com/ilooklike/illae/blob/master/screenshots/signup.png)

- Profile page
![!Image of profile page]
(https://github.com/ilooklike/illae/blob/master/screenshots/profile.png)