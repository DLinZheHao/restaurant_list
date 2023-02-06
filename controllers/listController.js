const mongoose = require('mongoose');
const Restaurant = require('../models/restaurantModel');

exports.add_restaurant = async (req, res) => {
  const req_body = req.body;
  await Restaurant.create(req_body);

  res.status(200).redirect('/');
};

exports.update_restaurant = async (req, res) => {
  const id = req.params.id;
  await Restaurant.findByIdAndUpdate(id, req.body);

  res.status(200).redirect(`/restaurants/${id}`);
};

exports.delete_restaurant = async (req, res) => {
  const id = req.params.id;
  await Restaurant.findByIdAndDelete(id, req.body);

  res.status(200).redirect('/');
};
