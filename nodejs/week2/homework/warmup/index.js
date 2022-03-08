const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/add", (req, res) => {

    const first = Number(req.query.first);
    const second = Number(req.query.second);
    const addResult = first + second;
    if (addResult) {
        res.send(`add result is : ${addResult}`) 
    }else{
        res.send(`check the number you typed`)
    }
    // if (first && second) {
    //     res.send(`add result is : ${addResult}`)
    // }
    // if (!first) {
    //     res.send(`you only type the firstNumber only ${first}`)
    // }
    // if (!second) {

    //     res.send(`you only type the secondNumber only${second}`)
    // }

});

app.get("/multiply/:first/:second", (req, res) => {
    const first = Number(req.params.first);
    const second = Number(req.params.second);
    const multiplyResult = first * second;

    if (multiplyResult) {
        res.send(`add result is : ${addResult}`) 
    }else{
        res.send(`check the number you typed`)
    }

    // if (first && second) {
    //     res.send(`multiply result is : ${multiplyResult}`)
    // }
    // if (!first) {
    //     res.send(`you only type the firstNumber only ${first}`)
    // }
    // if (!second) {

    //     res.send(`you only type the secondNumber only${second}`)
    // }

    
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
