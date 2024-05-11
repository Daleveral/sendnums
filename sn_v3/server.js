// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let stack = [];
resetStack();

function resetStack() {
    stack = Array.from({ length: 15 }, (_, i) => i + 1);
    stack.sort(() => Math.random() - 0.5);
}

app.post('/distribute', (req, res) => {

        const distributedNumbers = stack.splice(0, 5);
        res.status(200).json({ numbers: distributedNumbers });

        if (stack.length < 5) {
            resetStack();}

});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/stackCount', (req, res) => {
    res.status(200).json({ count: stack.length });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


