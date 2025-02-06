const express = require('express');
const app = express();
const port = 3000;


//serve static files from the "public" folder
app.use(express.static('public'));

//Define the route for the home page
app.get('/', (req,res) => {   
    res.send("Hello World");
});

//new route for about
app.get('/about', (req,res) =>{
    res.send('About Us')
});

app.use(express.json());
// new route for post
app.post('/submit',(req,res) =>{
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);

}); 


//new route for items

const items = ['Apple', 'Banana', 'Orange'];
app.get('/items', (req,res)=>
    {
        res.json(items);
    });

app.post('/items', (req,res)=>
{
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});



//Start the server 
app.listen(port, ()=> {
   console.log(`Server running at http://localhost:${port}`);
})