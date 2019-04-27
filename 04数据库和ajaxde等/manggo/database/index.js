const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/book', {useNewUrlParser: true});
var db = mongoose.connection;  // 储存持续化连接
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("已连接")
});

module.exports = db