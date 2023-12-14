class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar-container">
        <h1><span>Flavor</span>Quest</h1>
        <button id="hamburger-button" class="hamburger-button">
            <span class="hamburger"></span>
            <span class="hamburger half"></span>
            <span class="hamburger"></span>
        </button>
        <nav>
            <ul id="drawer">
                <li><a class="links" href="#">Home</a></li>
                <li><a class="links" href="#/favorite">Favorite</a></li>
                <li><a class="links" href="https://www.linkedin.com/in/satriaalieff/" target="_blank">About Us</a></li>
            </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
