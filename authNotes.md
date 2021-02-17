# Authentication and Authorization Process

- Authentication -> who are you? -> ada tanda pengenal dengan login melalui akun yang telah terdaftar
   - Tindakan mengkonfirmasi kebenaran suatu bagian dari data
   - Menggunakan library Passport.js
- Authorization -> what permissions do you have? -> Ketika sudah masuk, akan ada akses tertentu yang diberikan untuk setiap pengguna
- JWT (JSON Web Token) = sebuah token menggunakan JSON sebagai payloadnya, token merupakan kode diamna pengguna dapat satu untuk masing-masing akun
   - Merupakan sebuah library
   - jwt.io -> for the references
   - Header -> algorithm & token type
   - Payload -> berisi data
   - Verify Siganture -> sebuah kunci ada kode secret (seperti halnya gerigi di kunci yang berbeda)
- Bearer Token : sebuah cara untuk memasukkan kunci / key
- Passport.js --> sebuah modul dimana sebagai cara supaya kita bisa melakukan authorization --> untuk melakukan authorization
   - Terdiri dari beberapa modul
   - Yang dilakukan JWT SIGN mengenskripsi ID, tugas anon function dalam passport memecah kode tersebut dengan menggunakan JWT SECRET isi payload dengan body.

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