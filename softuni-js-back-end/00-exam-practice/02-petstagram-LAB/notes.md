# Cheat Sheet

1. Initialize project and structure
2. Setup dev environment - nodemon
3. Install and setup express
    * add static middleware
    * add body parser
    * routes
4. Add static resources
5. Add views folder with ready htmls
6. Add express-handlebars view engine
    * install
    * add to express
    * config extension
    * config views folder (only for src projects)
    * add main layout
    * add partils folder
    * fix static paths
    * fix nav path to home
    * render home page
7. Add controllers folder with home controller
8. Add database
    * install mongoose
    * connect database
9. Authentication
    * add user controller
    * add controller to routes
    * fix header nav to login adn register and logout
    * add login page
    * render register page
10. Add user model
    * add unique index for username
    * validate password
11. Modify login & reg forms
12. Add register & login post actions
13. Add user manager
    * require manager in user controller
    * add register method
    * validate if user already exists
14. Hash password
    * install bcrypt
    * hash password
15. Login
    * find user by username
    * validate password with hash
16. Generate jwt token
    * install jsonwebtoken
    * promisify jsonwebtoekn (optional)
    * create secret
    * generate token in manager.login
17. Return token in cookie
    * install cookie parser
    * config cookie parser
    * set cookie with token
18. Logout
19. Authentication middleware
    * create base middleware
    * use middleware
    * implement middlweare
    * attach decoded token to request
    * handle invalid token
20. Authorization middleware
21. Dynamic navigation
    * add conditional in main layout
    * add res locals
22. Error Handling
    * add 404 page
    * redirect missing route to 404
    * add global error handler middleware (only for very common scenarios) (optional)
    * user global error handler after routes(optional)
    * add error message extractor
23. Show error notifications
    * add error ctr to main layout
    * show err ctr conditionally
    * pass err to render
    * add local error handler
24. Auto login after register


## Next time
1. GLobal Error Handler
2. Debugger
