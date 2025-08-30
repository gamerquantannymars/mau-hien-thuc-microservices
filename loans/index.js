const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const mongoURI = 'mongodb://mongo:27017/library';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB kết nối thành công'))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log('Quản lý mượn trả đang chạy trên cổng 3000');
});