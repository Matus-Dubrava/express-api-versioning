const express = require('express');

const apiv1 = require('./apis/apiv1.js');
const apiv2 = require('./apis/apiv2.js');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', apiv1);
app.use('/api/v2', apiv2);

app.listen(port);
