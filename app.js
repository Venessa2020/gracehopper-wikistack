const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in ${PORT}`);
});
