const fs = require('fs');

// read restaurant.json from dev-data
// const restaurant_List = JSON.parse(
//   fs.readFileSync(`./dev-data/restaurant.json`, 'utf-8')
// );

exports.index_page = (req, res) => {
  res
    .status(200)
    .render('index_page', { restaurants: restaurant_List.results });
};
exports.show_page = (req, res) => {
  const restaurant_id = req.params.id;
  const restaurant = restaurant_List.results.filter((el) => {
    if (String(el.id) === String(restaurant_id)) return el;
  });

  res.status(200).render('show_page', {
    restaurant: restaurant[0],
  });
};

exports.search_page = (req, res) => {
  console.log(req.query.keyword);
  if (!req.query.keyword) {
    return res.redirect('/');
  }
  const keyword = req.query.keyword.trim().toLowerCase();
  // const regex = new RegExp(`${keyword}`, 'i');

  const restaurants = restaurant_List.results.filter(
    (el) =>
      el.name.toLowerCase().includes(keyword) || el.category.includes(keyword)
  );

  console.log(restaurants);
  res.status(200).render('index_page', { restaurants, keyword });
};
