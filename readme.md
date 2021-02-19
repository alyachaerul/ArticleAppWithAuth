# Authentication and Authorization Process

Make an article app with the auth process in Express JS using Sequelize, JWT, Passport and Node JS.

## Learn How to make an Authentication by MCR Concept in Express JS Using Sequelize :

1. `git init`
2. `npm init`
3. `npm install express dotenv ejs pg sequelize`
4. Create `env` with contents of :
   - DB_USERNAME=""
   - DB_PASSWORD=""
   - DB_DATABASE=""
   - DB_DIALECT=""
   - DB_PORT=""
   - DB_HOST=""
   - PORT=""
5. Create .gitignore with :
   - node_modules
   - package-lock.json
   - .env
6. `sequelize init` 
7. Rename `config.json` -> `config.js`
   - Use `dotenv` to use environment variable in sequelize config
8. Change `model/index.js` config variable require to changed `config.js`
9. `sequelize db:create`
10. `sequelize model:create --name Users --attributes username:string,password:string,fullName:string`
11. `sequelize model:create --name Articles --attributes content:text, userId:string`

### Create Relations

1. At Migration User file, change Data Type : 
   - id to STRING(22)
   - Delete the auto increment on ID
   - username to STRING(18)
   - fullName to STRING(52)
2. At Migration Articles file, change Data Type : 
   - id to STRING(22)
   - Delete the auto increment on ID
   - userId STRING(22)
   - Add References on userId to model Users with key Id
3. `sequelize db:migrate` 
4. In Articles Model, define the association : relation hasOne to Users Model
5. In Users Model, define the association : relation hasMany to Articles Model

### Create API

1. Create `index.js` file 
   - User dotenv
   - Initiate Express
   - Use express.json() middleware
2. Create `route` folder with `authRoute.js` file
   - /login with return of request body
   - /register with return of request body
3. Require authRoute.js to index.js and use it as middleware with route prefix
4. Add start and dev script in package.json

### Set Up MCR & Auth

1. Create controller folder with userController.js
   - `npm i bcrypt` -> Library that allowed to encrypted password
   - `npm install nanoid`
   - `npm install jsonwebtoken` require to the controller
   - Add JWT_SECRET env variable
   - Make register and login method
2. User userController to register and login route in authRoute.js

### Set up Authorization

1. Create `articleController.js` with CRUD methods
2. Create `artcileRoute.js` with CRUD methods
3. Require articleRoute to `index.js` with /article prefix 
4. `npm i passport passport-jwt`
5. Create a middleware folder with `passportMiddleware.js` file to verify the header before accessing
   - Implement `passport jwt middleware` 
6. Use passport & middleware to `articleRoute.js`
7. Modify POST & GET method in `articleRoute.js` to use user id in token

### Deployment Process : Set Up Heroku

1. `heroku login` 
2. `heroku create app-name`
3. Checking the `git remote -v` will be display a new remote named heroku
4. `heroku addons:create heroku-postgresql` > add addon postgres
5. Checking the addon : `heroku addons --all` 
6. Check the addons : 
   - `heroku addons:services`
   - `heroku addons:services | grep postgres` will show the only line including postgres words
7. To see the addon list that has been added : `heroku addons: services --all`
8. Checking environment variable in Heroku : `heroku config -s` 
9. Set or add the environment variable : `heroku config:set JWT_SECRET="secret jwt" PGSSLMODE=no-verify`
10. `npm i -D sequelize-cli` 
11. Add `build` script with value `sequelize:db create` 
12. Change the development setting on `config.js` 
   - `"use_env_variable": "DATABASE_URL"`
   - `logging: false`
10. Push the file to heroku : `git push -f heroku master`