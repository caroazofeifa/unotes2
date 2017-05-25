
const express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.send("hello world");
});

app.get('/bretes', (req,res) => {
     res.json({
        "name":"brete"
     });
});

app.listen(3000, () =>{
    console.log('exp list on port 3000');
});
