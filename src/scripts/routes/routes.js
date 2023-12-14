import Homepage from '../view/pages/homepage';
import Detail from '../view/pages/detail';
import Favorite from '../view/pages/favorite';

const routes = {
  '/': Homepage,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
