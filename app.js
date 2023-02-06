// import
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const dotenv = require('dotenv');
const exphbs = require('express-handlebars');

const viewRoutes = require('./routes/viewRoutes');
const listRoutes = require('./routes/listRoutes');
// 引用環境變數 （一般不會git上去）
//dotenv.config({ path: './config.env' });

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

// view template setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// public folder read
app.use(express.static(path.join(__dirname, 'public')));

// 最後安全網
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection! Shutting down... ');
  process.exit(1);
});

mongoose.set('strictQuery', true);
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config.env' });
}

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// 連接資料庫
mongoose
  //.connect(process.env.DATABASE_LOCAL)//
  .connect(DB, {
    useNewUrlParser: true,
  });

// 資料庫連線狀況處理
const db = mongoose.connection;

db.on('error', () => {
  console.log('Error connecting');
  process.exit(1);
});

db.once('open', () => {
  console.log('DB connection successfully established');
});

app.use('/', viewRoutes);
app.use('/', listRoutes);
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!`);
});
