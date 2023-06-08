const express = require('express');

const app = express();
const port = 8090;

app.listen(port);

app.get('/home', (req, res) => {
   res.sendFile(__dirname + '/src/index.html')

})