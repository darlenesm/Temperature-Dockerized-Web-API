const express = require('express');

const app = express();

app.use(express.json());

app.get('/',(req, res) => 
{
  res.send("Temperature Conversion");
});

//CELSIUS CONV
app.post('/ctok', (req,res)=>{

    let c =req.body.c;
    let ctok = c + 273.15;
  
    res.send(`Celsius to Kelvin =  ${ctok}`);
});

app.post('/ctof', (req,res)=>{

    let c =req.body.c;
    let ctof = (c * 9 / 5) + 32;
  
    res.send(`Celsius to Fahrenheit =  ${ctof}`);
});

//KELVIN CONV
app.post('/ktoc', (req,res)=>{

    let c =req.body.c;
    let ktoc = c - 273.15;
  
    res.send(`Kelvin to Celsius =  ${ktoc}`);
});

app.post('/ktof', (req,res)=>{

    let c =req.body.c;
    let ktof = (c - 273.15) * 9/5 + 32;
  
    res.send(`Kelvin to Fahrenheit =  ${ktof}`);
});

//FAHRENHEIT CONV
app.post('/ftoc', (req,res)=>{

    let c =req.body.c;
    let ftoc =(c - 32) * 5 / 9;
  
    res.send(`Fahrenheit to Celsius =  ${ftoc}`);
});

app.post('/ftok', (req,res)=>{

    let c =req.body.c;
    let ftok = (c - 273.15) * 9/5 + 32;
  
    res.send(`Fahrenheit to Kelvin =  ${ftok}`);
});

app.listen(3000);
