const express = require('express');
const hbs = require('express-handlebars');
const router = require('./routes/index');
const path = require('path');

const app = express();

app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname,'public')));
app.use('/',router);

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  
