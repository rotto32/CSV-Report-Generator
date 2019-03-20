const express = require('express');
const app = express();
const port = 3000;


/****************************** */
//Routers
/****************************** */

app.use(express.static('./Client'));


/****************************** */
//server init
/****************************** */

app.listen(port, () => console.log(`Now listening on port ${port}`));

