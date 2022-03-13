const express = require('express');
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/calculator', (req, res) => {
    let result = 0;
    const firstParam = req.query.firstParam;
    const secondParam = req.query.secondParam;
    if (isNaN(firstParam)) {
        res.send(' please write  a number');
    }
    else if (isNaN(secondParam) && secondParam.length == 1) {
        res.send(' please write  a number');
    }
    else {
        if ("addition" in req.query) {
            if (Array.isArray(secondParam)) {
                const result = secondParam.reduce((current, total) => Number(current) + Number(total), Number(firstParam));
                res.json(result);
            } else {
                result = firstParam + secondParam;
                res.json(result);
            }

        }
        if ("subtraction" in req.query) {
            if (Array.isArray(secondParam)) {
                result = Number(firstParam) - secondParam.reduce((current, total) => Number(current) + Number(total));
                res.json(result);
            } else {
                result = firstParam - secondParam;
                res.json(result);
            }
        }
        if ('multiplication' in req.query) {
            if (Array.isArray(secondParam)) {
                result = Number(firstParam) * secondParam.reduce((current, total) => Number(current) * Number(total));
                res.json(result);
            } else {
                result = firstParam * secondParam;
                res.json(result);
            }
            result = firstParam * secondParam;
            res.json(result);
        }
        if ('division' in req.query) {
            if (Array.isArray(secondParam)) {
                result = Number(firstParam) / secondParam.reduce((current, total) => Number(current) * Number(total));
                res.json(result);
            } else {
                result = firstParam / secondParam;
                res.json(result);
            }
        }
    }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));