
App details: 

    Name: Chirper
    Description:
        -> This app uses MEAN Stack architecture.
        -> It has twitter like functionalities.
            - User Accounts
            - Chirps ( Posts by Users ) ( like twitter tweets )
            - Chirp feed ( displays all posts by users )            

Requirements:
	    1. Nodejs 
	    2. npm
	    3. mongodb 

Execution Instruction:

    1. MongoDB : mongoDB service must be running
        service name : mongod
           
    2. Start the app : 
        command : npm start
       
        Starting script is set to : app.js (which is the node script which executes server using express node module)
        (If you need to change starting script, it can be changed in package.json)
        
        
Directory Details:

    node_modules    : Contains all node.js modules which are used in the app
    models          : Contains models for database
    public          : All the files for Frontend are placed in public directory ( which is accessible by the http requests. Note: the user can only access this directory )
    routes          : Contains all route scripts for navigation happening in app
    views           : Contains the views(Templates) for the app ( like index , error, etc. Note: you can add your own view and reoute to it by using routes)
    scripts         : Contains outher server logics
    
Server Files Details:

    Directory:  "/" 
    Files: 
        app.js              : Contains main server logic and is the script which runs the server
    
    Directory:  "/scripts"
    Files:
        passport-init.js    : Used for User Account Serialization, Login and Signup
        
    Directory:  "/models"
    Files:
        models.js           : Defines models which are schemas for mongoDB data which is used in app
        
    Directory:  "/node-modules"
    Files:
        Node Dependencies are installed in this folder
        Like,
            express, passport, bCrypt-nodejs, mongoose, cookie-parser, etc.
            
    Directory:  "/routes"
    Files:
        api.js              : Contains routing logic for posts (Chirps!)
        authenticate.js     : Contains routing logic for authentication of users (like: signup, login, signout)
        index.js            : Contains app navigation logic
        
    Directory:  "/views"
    Files:
        Views(Templates) are kept in this directory.
        Like: error, index
        Views are in form of ejs views (Embedded Javascript Templates)
        
    Directory:  "/public"
    Files:
        index.html          : The main page of app. Which contains only template of app. It is populated through the angularjs using the other views.
        
        register.html,
        login.html,
        main.html : Contains views for the app.
        
    Directory: "/public/javascripts"
    Files: 
        chirpApp.js         : Contains the AngularJS Frontend Logic (Controllers, Routing Logics)
       