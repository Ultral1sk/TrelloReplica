const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();
const port        = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.listen(port, () => {
      console.log(`Server working on port: ${port}`);
})