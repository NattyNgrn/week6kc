import express from "express";
const app = express();
const port = process.env.PORT || 8080;
import cors from "cors"; //allows frontend to request resources from backend, improves security
import path from "path";

const __dirname = path.resolve(); // gets director file for project
app.use(cors()); 


//route localhost:8080 to index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// //route localhost:8080/about to about.html
// app.get('/about', function)
app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
})
// //route localhost:8080/contactme to contactme.html
// app.get('/contactme', function)
app.get('/contactme', (req, res) => {
    res.sendFile(__dirname + "/contactme.html");
})
// //404 error display if something goes wrong
// app.get('/error', function)
app.use((req, res) => {
    res.status(404) // if status = 404 it returns 404 error html
    res.sendFile(__dirname + "/404.html");
})
app.listen(port, () => console.log(`listening at http://localhost:${port}`));