import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from '/imports/ui/Layout.jsx';
import Home from '../../ui/pages/Home.jsx';
import Tours from '../../ui/pages/Tours.jsx';
import Contact from '../../ui/pages/Contact.jsx';
import About from '../../ui/pages/About.jsx';
import Tour from '../../ui/pages/Tour.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';

import { tourItems as tourResources } from '../../ui/constants/tourItems.js';

const Routes = (props) => {
  onUpdate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router onUpdate={onUpdate} history={browserHistory}>
      <Route path='/' component={Layout} >
        <IndexRoute component={Home}/>
        <Route path='/home' component={Home} />
        <Route path='/tours' component={Tours}/>
        <Route path='/tours/:id' component={Tour} data={tourResources} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  );
}

export default Routes;
