import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bot from "./pages/Bot";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);
const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname);
};

const App = () => {
  return (
    <Auth0Provider
      domain="dev-y455c6k6.us.auth0.com"
      clientId="coRMNUXsi1LdWn4F1Gfqws7wmQVDL96D"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <ProtectedRoute path="/AlertBot" component={Bot} />
        </Switch>
      </Router>
    </Auth0Provider>
  );
};

export default App;
