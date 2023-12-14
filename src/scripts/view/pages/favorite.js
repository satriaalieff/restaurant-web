import {
  createRestaurantItemTemplate,
  createRestaurantItemTemplateAlternative,
  createNullPageTemplate,
} from '../template/template-creator';
import RestaurantFavorite from '../../data/restaurant-favorite';

const Favorite = {
  async render() {
    return `
          <h3 class="restaurant-title-section">Favorite Restaurants</h3>
          <div id="restaurant-list" class="restaurant-list"></div>
          <div id="null-container" class="null-container"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantFavorite.getAllRestaurants();

    if (restaurants.length === 0) {
      const nullContainer = document.getElementById('null-container');
      nullContainer.innerHTML = createNullPageTemplate();
    } else {
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
    }
  },
};

export default Favorite;
