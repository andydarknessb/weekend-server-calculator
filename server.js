const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

app.use(express.static('server/public'));

let history = [];

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); 


app.post('/calculate', (req, res) => {
    const input = req.body.input;
    const result = eval(input);
    console.log(`${input} = ${result}`);
    history.push({input: input, result: result});
    res.json({result: result});
});

app.get('/history', (req, res) => {
  res.json(history);
});
