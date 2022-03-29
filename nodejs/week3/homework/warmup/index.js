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

    }//judge the secondParam is not a number
    else if (isNaN(secondParam) && secondParam.length == 1) {
        res.send(' please write  a number');
    }
    else {
        if ("addition" in req.query) {
            // Array.isArray() is to judge whether it is an array
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


//method 2 seperately do it.
// app.get('/calculator/addition', (req, res) => {
//     const firstParam = Number(req.query.firstParam);
//     const secondParam = Number(req.query.secondParam);

//     const result = firstParam + secondParam;
//     if (!result) {
//         res.send(' please write  a number');
//     }
//     res.json(result);
// });
// app.get('/calculator/substraction', (req, res) => {
//     const firstParam = Number(req.query.firstParam);
//     const secondParam = Number(req.query.secondParam);

//     const result = firstParam - secondParam;
//     if (!result) {
//         res.send(' please write  a number');
//     }
//     res.json(result);
// });
// app.get('/calculator/multiplication', (req, res) => {
//     const firstParam = Number(req.query.firstParam);
//     const secondParam = Number(req.query.secondParam);

//     const result = firstParam * secondParam;
//     if (!result) {
//         res.send(' please write  a number');
//     }
//     res.json(result);
// });
// app.get('/calculator/division', (req, res) => {
//     const firstParam = Number(req.query.firstParam);
//     const secondParam = Number(req.query.secondParam);

//     const result = firstParam / secondParam;
//     if (!result) {
//         res.send(' please write  a number');
//     }
//     res.json(result);
// });

app.post('/addition', (req, res) => {
    const first = Number(req.body.firstParam);
    const second = Number(req.body.secondParam);
    const result = first + second;
    if (!result) {
        res.send(' please write  a number');
    }
    res.json(result);
});
app.post('/substraction', (req, res) => {
    
    const firstParam = Number(req.body.firstParam);
    const secondParam = Number(req.body.secondParam);
    const result = firstParam - secondParam;
    if (!result) {
        res.send(' please write  a number');
    }
    res.json(result);
});

app.post('/multiplication', (req, res) => {
    const firstParam = Number(req.body.firstParam);
    const secondParam = Number(req.body.secondParam);
    const result = firstParam * secondParam;
    if (!result) {
        res.send(' please write  a number');
    }
    res.json(result);
});

app.post('/division', (req, res) => {
    const firstParam = Number(req.body.firstParam);
    const secondParam = Number(req.body.secondParam);
    const result = firstParam / secondParam;
    if (!result) {
        res.send(' please write  a number');
    }
    res.json(result);
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));