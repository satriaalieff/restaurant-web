class ReviewSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="add-review-container">
        <button id="close-review-button" class="close-review-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path fill="#f2f2f2" d="M764.288 214.592L512 466.88L259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512L214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/></svg>
        </button>
        <input type="text" id="customer-name" placeholder="Name..">
        <textarea name="review" id="customer-review" cols="30" rows="10" placeholder="Reviews.."></textarea>
        <button id="add-review-button" class="add-review-button" type="submit">Add</button>
      </div>
    `;
  }
}

customElements.define('review-section', ReviewSection);
