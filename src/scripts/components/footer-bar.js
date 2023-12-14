class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>
        copyright &copy -
        <a
        target="_blank"
        href="https://www.linkedin.com/in/satriaalieff/"
        >satriaalief</a
        >
      </p>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
