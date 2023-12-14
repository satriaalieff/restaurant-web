/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import SkipToContentHandler from '../utils/skip-to-content-handler';
import Homepage from './pages/homepage';

class App {
  constructor({ button, drawer }) {
    this._button = button;
    this._drawer = drawer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const mainContent = document.getElementById('main');
    try {
      const page = routes[url];
      mainContent.innerHTML = await page.render();
      await page.afterRender();

      document.getElementById('skip-to-content').addEventListener('click', (event) => {
        event.preventDefault();
        SkipToContentHandler();
      });
    } catch (error) {
      mainContent.innerHTML = await Homepage.render();
      await Homepage.afterRender();

      Swal.fire({
        icon: 'error',
        title: "Page doesn't exist",
        width: '30rem',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}

export default App;
