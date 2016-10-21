var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

<Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/:type" component={MovieList}/>
        <Route path="/:type/:product" component={MovieList}/>
      </Router>
