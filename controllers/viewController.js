const fs = require('fs');
const Restaurant = require('../models/restaurantModel');

exports.edit_page = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id).lean();

  res.status(200).render('edit_page', { restaurant });
};

exports.add_page = (req, res) => {
  res.status(200).render('add_page');
};

exports.index_page = async (req, res) => {
  try {
    // 使用handlebars 需要將資料 lean()
    const restaurants = await Restaurant.find().lean();
    //console.log(restaurants);
    res.status(200).render('index_page', { restaurants: restaurants });
  } catch (err) {
    console.error(err);
  }
};

exports.show_page = async (req, res) => {
  try {
    const restaurant_id = req.params.id;
    // const restaurant = restaurant_List.results.filter((el) => {
    //   if (String(el.id) === String(restaurant_id)) return el;
    // });
    const restaurant = await Restaurant.findById(restaurant_id).lean();
    res.status(200).render('show_page', {
      restaurant,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.search_page = async (req, res) => {
  try {
    //console.log(`${req.query.keywords}`);
    if (!req.query.keywords) {
      return res.redirect('/');
    }
    const keyword = req.query.keywords; //.trim().toLowerCase();
    // const regex = new RegExp(`${keyword}`, 'i');

    // const restaurants = restaurant_List.results.filter(
    //   (el) =>
    //     el.name.toLowerCase().includes(keyword) || el.category.includes(keyword)
    // );
    console.log(keyword);
    const regex = new RegExp(`${keyword}`, 'i');
    let restaurants = await Restaurant.find({
      name: { $regex: regex },
    }).lean();

    if (restaurants.length === 0) {
      restaurants = await Restaurant.find({
        category: { $regex: regex },
      }).lean();
    }

    res.status(200).render('index_page', { restaurants, keyword });
  } catch (err) {
    console.error(err);
  }
};
