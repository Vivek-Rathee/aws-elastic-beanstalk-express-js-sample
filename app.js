const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This Continuous Delivery Pipeline has a review stage requiring manual approval. If you do not see your changes, please wait for approval.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
