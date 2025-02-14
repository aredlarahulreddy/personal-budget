const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use('/',express.static('public'));

/*const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    
    ]
};*/



app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/budget', (req, res) => {
    fs.readFile('budget.json', (err, data) => {
        if (err) {
          res.status(500).send('Error loading data');
          return;
        }
        const budgetData = JSON.parse(data);
        res.json(budgetData);
      });
    //res.json(budget);
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
