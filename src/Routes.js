import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FeaturedPage from './pages/FeaturedPage';
import ExplorePage from './pages/ExplorePage';
import MyActivityPage from './pages/MyActivityPage';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FeaturedPage} />
        <Route path="/featured" exact component={FeaturedPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/myactivity" component={MyActivityPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
