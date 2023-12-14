class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <h2>Exploring Culinary Delights Near You</h2>
        </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
