const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.static(__dirname));

const CLAUDE_API_KEY = 'YOUR-API-KEY';

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/chat', async (req, res) => {
    try {
        console.log('Received request body:', req.body);

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': CLAUDE_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-2.1",  // Actualizat la versiunea corectă
                max_tokens: 1000,
                messages: req.body.messages
            })
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API error:', response.status, errorText);
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        
        const data = await response.json();
        console.log('API response:', data);
        res.json(data);
    } catch (error) {
        console.error('Detailed error:', error);
        res.status(500).json({ error: error.message, stack: error.stack });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});