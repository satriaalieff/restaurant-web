/* eslint-disable no-underscore-dangle */
import RestaurantFavorite from '../data/restaurant-favorite';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../view/template/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantFavorite.getRestaurant(id);
    return !!restaurant;
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML += createLikeButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavorite.updateRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML += createLikedButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavorite.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
