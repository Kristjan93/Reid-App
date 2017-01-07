import Home from '../../ui/pages/Home.jsx';
import Container from '../../ui/components/Container.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';
import LongTours from '../../ui/pages/LongTours.jsx';
import ShortTours from '../../ui/pages/ShortTours.jsx';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    component: Container,
    childRoutes: [
      {
        path: '/short-tours',
        component: ShortTours,
      },
      {
        path: '/long-tours',
        component: LongTours,
      },
      {
        path: '*',
        component: NotFound,
      },
    ]
  },
];

export default routes;
