// import
const path = require('path');
const express = require('express');
const app = express();

const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const viewRoutes = require('./routes/viewRoutes');

// 引用環境變數 （一般不會git上去）
dotenv.config({ path: './config.env' });

// view template setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// public folder read
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});
