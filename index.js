// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/check-debt/:userId', (req, res) => {
    const mockData = {
        hasDebt: false,
        amount: 1500,
        dueDate: '2024-11-20'
    };

    res.json(mockData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
