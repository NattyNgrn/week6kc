const express = require('express');
const app = express();
const port = 8080;


//route localhost:8080 to index.html
app.get('/', function)

//route localhost:8080/about to about.html
app.get('/', function)

//route localhost:8080/contactme to contactme.html
app.get('/', function)

//404 error display if something goes wrong
app.get('/', function)

app.listen(port, () => console.log(`listening at http://localhost:${port}`));