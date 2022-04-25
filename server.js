const app = require("./app.js");
const db = require("./db");

const PORT = process.env.PORT || 3000;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//npm init
//npm i express mongoose morgan nodemon cors


//then go to package.json add 
//    "dev": "nodemon server.js",
//"start": "node server.js"

//start from db/index.js, then schema at models/item.js

//back-End - in the terminal:
//to connect to database - run: node seed/plans.js

//run: mongo
//run: use dailyPlnnerDatabase
//run: db.plans.find()

// test it on browser

// then connect it with react app: by running: npx create-react-app client
//then goto client that is cd client : run command to install react 17 version auto that we manually changed from 18 to 17 version : npm install
// run: npm install axios react-router-dom
// set up routes and shared folder
//then go to App.js in src folder set up routes





