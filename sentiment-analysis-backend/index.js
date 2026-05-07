const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sentimentRoutes = require('./routes/sentimentRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/sentiment', sentimentRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
