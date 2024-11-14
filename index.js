const express = require('express');
const app = express();

// Middleware para habilitar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Manejar las solicitudes OPTIONS
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.get('/api/check-debt/:userId', (req, res) => {
    // Simular verificación de deuda
    // En un caso real, esto consultaría una base de datos
    const mockDebts = {
        'user123': {
            hasDebt: true,
            amount: 1500,
            dueDate: '2024-11-20'
        },
        'user456': {
            hasDebt: false,
            amount: 0,
            dueDate: null
        }
    };

    const userId = req.params.userId;
    const userDebt = mockDebts[userId] || { hasDebt: false, amount: 0, dueDate: null };

    res.json(userDebt);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
