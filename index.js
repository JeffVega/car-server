const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json())
// Morgan MiddleWare
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
let port = 8080
app.listen(port,() =>{
    if(port){
    console.log(`Connection on PORT:${port}`)

}
else{
    new Error( `CONNECTION FAILED:${port}`)
}
});