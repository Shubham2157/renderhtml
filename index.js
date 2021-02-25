const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
app.listen(3000, () => {
    console.log("listen to port 3000")
})