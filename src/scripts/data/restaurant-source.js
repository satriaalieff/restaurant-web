import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async getAllRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }

  static async addReview(id, name, review) {
    const customerReview = {
      id,
      name,
      review,
    };
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerReview),
    });
    return response.json();
  }
}

export default RestaurantSource;
