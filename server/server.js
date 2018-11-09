const path = require('path');
const publicPath = path.join(__dirname, '../public'); // https://nodejs.org/api/path.html#path_path_join_paths --It's better
//console.log(__dirname + '/../public'); --Not so good
//console.log(publicPath);

const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
