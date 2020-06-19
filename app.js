require("dotenv").config();
const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();
const cors        = require('cors')
const port        = process.env.PORT || 3001;
const connectDB   = require('./config/db');

const authPath = require('./router/auth');

// Mongodb Atlas connection
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());


app.use('/', authPath);
app.use('/', authPath);


app.listen(port, () => {
      console.log(`Server working on port: ${port}`);
})