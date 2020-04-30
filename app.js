const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, User, Page } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(layout(''));
});

db.authenticate().then(() => {
  console.log('connected to the database');
});

const init = async () => {
  await User.sync();
  await Page.sync();
  await db.sync({ force: true });
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in ${PORT}`);
  });
};

init();
