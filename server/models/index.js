const Sequelize = require('sequelize');
const db = new Sequelize();

const Place = db.define('places', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }

});

const Hotel = db.define('hotels', {
  name: {
    type: Sequelize.STRING
  },
  num_starts: {
    type: Sequelize.FLOAT,
    validation: {
      min: 1,
      max: 5
    }
  },
  ameneties: {
    type: Sequelize.STRING
  }

});

const Activity = db.define('activities', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

db.define('Restaurants', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    validations: {
      min: 1,
      max: 5
    }
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

