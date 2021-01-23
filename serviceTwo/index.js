const express = require('express');

const app = express();

app.get('/api', (req,res) => {
    res.json({
        message: "hello from service two"
    })
})

app.get('/test', (req,res) => {
    res.json({
        message: "test response"
    })
})

app.get('/', (req,res) => {
    res.json({
        message: "test response"
    })
})

app.listen(5000, () => {
    console.log("service two started")
});