import '../styles/main.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/hero-section';
import './components/footer-bar';
import './components/review-section';
import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('hamburger-button'),
  drawer: document.getElementById('drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
