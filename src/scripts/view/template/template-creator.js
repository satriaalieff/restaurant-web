import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <img src="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="restaurant" />
        <div class="city">${restaurant.city}</div>
        <div class="content">
            <h4>${restaurant.name} <span>(⭐${restaurant.rating})</span></h4>
            <a href="/#/detail/${restaurant.id}">Show More</a>
        </div>
    </div>
`;

const createRestaurantItemTemplateAlternative = (restaurant) => `
    <div class="restaurant-item right">
        <img src="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="restaurant" />
        <div class="city">${restaurant.city}</div>
        <div class="content">
            <h4>${restaurant.name} <span>(⭐${restaurant.rating})</span></h4>
            <a href="/#/detail/${restaurant.id}">Show More</a>
        </div>
    </div>
`;

const createRestaurantMenuListTemplate = (menus) => `
    <ul id="menu-container" class="menu-container">
        ${menus.map((menu) => `<li>${menu.name}</li>`).join('')}
    </ul>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail">
        <h4>${restaurant.name}</h4>
        <img src="${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId}" alt="restaurant">
        <div id="restaurant-contents" class="restaurant-contents">
            <div class="restaurant-address">
                <span>Rating: ${restaurant.rating}</span>
                <p class="city-detail">${restaurant.city}</p>
                <p class="address-detail">${restaurant.address}</p>
            </div>
            <div class="restaurant-description">
                <p id="categories" class="categories">Category
                    ${restaurant.categories.map((category) => `<span>${category.name}</span>`).join(', ')}
                </p>
                <p class="description-detail">${restaurant.description}</p>
            </div>
            <h5 class="sub-title">${restaurant.name}'s Menu</h5>
            <div class="restaurant-menu">
                <div class="menus-container">
                    <p class="menu-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="#ffd700" d="M224 104h-8.37a88 88 0 0 0-175.26 0H32a8 8 0 0 0-8 8a104.35 104.35 0 0 0 56 92.28V208a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 112a8 8 0 0 0-8-8Zm-24.46 0h-51.42a71.84 71.84 0 0 1 41.27-29.57A71.45 71.45 0 0 1 199.54 104Zm-26.06-47.77q2.75 2.25 5.27 4.75a87.92 87.92 0 0 0-49.15 43h-29.5A72.26 72.26 0 0 1 168 56c1.83 0 3.66.09 5.48.23ZM128 40a71.87 71.87 0 0 1 19 2.57A88.36 88.36 0 0 0 83.33 104H56.46A72.08 72.08 0 0 1 128 40Zm36.66 152a8 8 0 0 0-4.66 7.3v8.7H96v-8.7a8 8 0 0 0-4.66-7.3a88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72Z"/></svg>
                    </p>
                    ${createRestaurantMenuListTemplate(restaurant.menus.foods)}
                </div>
                <div class="menus-container">
                    <p class="menu-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#ffd700" d="m273.637 128l3.809 32h96.43l-8 64H252.573l-7.442-64h.089l-3.809-32l-.045-.389l-9.041-77.745L230.247 32H104v32h97.753l7.442 64h-91.319l40.5 323.969A32.051 32.051 0 0 0 190.125 480h147.75a32.051 32.051 0 0 0 31.753-28.031L410.124 128Zm-119.513 32h58.792l7.442 64h-58.234Zm183.765 288H190.124l-24-192h57.955l13.953 120h32.215l-13.954-120H361.88Z"/></svg>
                    </p>
                    ${createRestaurantMenuListTemplate(restaurant.menus.drinks)}
                </div>
            </div>
        </div>
        <h5 class="sub-title">Our Customers</h5>
        <section id="splide" class="splide" aria-label="slider">
            <div class="splide__track">
                <ul id="item-place" class="splide__list">
                    ${restaurant.customerReviews.map((customer) => `
                        <li class="splide__slide">
                            <div class="review-container">
                                <p class="customer-name">${customer.name}</p>
                                <p class="customer-review">${customer.review}</p>
                                <p class="customer-date">${customer.date}</p>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </section>
        <div class="review-button-container">
            <button id="review-button" class="review-button">Add Review</button>
        </div>
    </div>
`;

const createNullPageTemplate = () => `
    <div class="null-page">
        <p>You have no favorite</p>
        <p>Try add some restaurants to your favorite</p>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like" id="likeButton" class="like">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 256 256"><path fill="gold" d="M178 36c-21.44 0-39.92 10.19-50 27.07C117.92 46.19 99.44 36 78 36a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a333.81 333.81 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a333.81 333.81 0 0 0 52.7-36.73C218 152.47 236 122.59 236 94a58.07 58.07 0 0 0-58-58Zm-50 175.42C114 203.46 28 152.07 28 94a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 55.31 156.89 44 178 44a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42Z"/></svg>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike" id="likeButton" class="like">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="gold" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"/></svg>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantItemTemplateAlternative,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createNullPageTemplate,
};
