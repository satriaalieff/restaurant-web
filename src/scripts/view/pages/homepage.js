import {
  createRestaurantItemTemplate,
  createRestaurantItemTemplateAlternative,
} from '../template/template-creator';
import RestaurantSource from '../../data/restaurant-source';

const Homepage = {
  async render() {
    return `
        <h3 class="restaurant-title-section">Restaurants</h3>
        <div id="restaurant-list" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getAllRestaurant();
    const restaurantsContainer = document.getElementById('restaurant-list');
    let index = 1;
    restaurants.forEach((restaurant) => {
      if (index % 2 === 0) {
        restaurantsContainer.innerHTML += createRestaurantItemTemplateAlternative(restaurant);
      } else {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      }
      // eslint-disable-next-line no-plusplus
      index++;
    });
  },
};

export default Homepage;
