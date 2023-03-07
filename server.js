const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate', (req, res) => {
    const input = req.body.input;
    const result = eval(input);
    res.json({result: result});
});

app.get('/calculate', (req, res) =>{
    const result = req.query.result;
    res.send(result);
});

const port = process.env.port || 5001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});