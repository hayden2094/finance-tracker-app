const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://roberthstrickland:wzyPCJ9pB4qNov4i@cluster0.ii5ba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const { OpenAI } = require('openai');
const openai = new OpenAI({
  apiKey: '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'
});


app.use(cors());
app.use(bodyParser.json());

// Basic Route
app.get('/api/transactions', (req, res) => {
  const transactions = [
    { category: 'Food', amount: 300 },
    { category: 'Entertainment', amount: 150 },
    { category: 'Bills', amount: 250 }
  ];
  res.json(transactions);
});

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: question }],
  });
  res.json(response.choices[0].message.content);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
