/* eslint-disable import/order */
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiato';
import { createRestaurantDetailTemplate } from '../template/template-creator';
import PostReviewHandler from '../../utils/post-review-handler';
import { Splide } from '@splidejs/splide';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/splide/css';

const Detail = {
  async render() {
    window.scrollTo(0, 0);
    return `
        <div id="restaurant-detail-container"></div>
        <review-section></review-section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);

    const restaurantContainer = document.getElementById('restaurant-detail-container');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const likeButtonContainer = document.createElement('div');
    likeButtonContainer.classList.add('like-button-container');
    likeButtonContainer.setAttribute('id', 'likeButtonContainer');
    document.getElementById('restaurant-contents').appendChild(likeButtonContainer);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      restaurant,
    });

    const reviewSection = document.querySelector('review-section');
    document.getElementById('review-button').addEventListener('click', () => {
      reviewSection.classList.add('active');
    });

    document.getElementById('close-review-button').addEventListener('click', () => {
      reviewSection.classList.remove('active');
    });

    document.getElementById('add-review-button').addEventListener('click', PostReviewHandler);

    new Splide('.splide', {
      focus: 'center',
      drag: 'free',
      lazyLoad: 'nearby',
      snap: 'true',
      perPage: 3,
      perMove: 2,
      padding: '1rem',
      breakpoints: {
        1024: {
          perPage: 2,
        },
        640: {
          perPage: 1,
        },
      },
    }).mount();
  },
};

export default Detail;
