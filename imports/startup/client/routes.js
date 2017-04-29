import Home from '../../ui/pages/Home.jsx';
import Gallery from '../../ui/pages/Gallery.jsx';
import Contact from '../../ui/pages/Contact.jsx';
import About from '../../ui/pages/About.jsx';
import Container from '../../ui/components/Container.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
import Tours from '../../ui/pages/Tours.jsx';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/tours',
    component: Tours,
  },
  {
    path: '/gallery',
    component: Gallery,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
