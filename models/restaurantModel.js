const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: [true, '請輸入餐廳名字'],
  },
  name_en: {
    type: String,
    default: 'none',
  },
  category: {
    type: String,
    required: [true, '請輸入類別'],
    // enum 預備設定可輸入類別
  },
  image: {
    type: String,
    default: 'default.jpg',
  },
  location: {
    type: String,
    required: [true, '請輸入餐廳位置'],
  },
  phone: {
    type: String,
    required: [true, '請輸入餐廳電話'],
  },
  google_map: {
    type: String,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
    default: '這間餐廳尚未有敘述',
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
