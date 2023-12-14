import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';

const PostReviewHandler = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const customerName = document.getElementById('customer-name').value;
  const customerReview = document.getElementById('customer-review').value;

  await RestaurantSource.addReview(url.id, customerName, customerReview);

  document.querySelector('review-section').classList.remove('active');
};

export default PostReviewHandler;
