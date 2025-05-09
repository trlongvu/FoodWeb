'use strict';

const { default: mongoose } = require('mongoose');

const connectString = process.env.MONGO_URI;

class DB {
  constructor() {
    this.connectDB();
  }
  connectDB(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => console.log(`Kết nối CSDL thành công`))
      .catch((err) => console.log(`Lỗi kết nối CSDL: ${err}`));
  }

  static getInstance() {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }
}

const db = DB.getInstance();
module.exports = db;
