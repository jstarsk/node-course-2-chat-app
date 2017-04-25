/**
 * Created by starsky on 4/25/17.
 */
require('./config/config');
const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
let port = process.env.PORT;
let app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Started at port ${port}`);
});

module.exports = {app};





