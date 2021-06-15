import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/login/login";
import PostAuth from "./pages/postAuth";
import { LOGIN, POST_AUTH_ROUTES, RECOVER } from "./routes";
import AlertModal from "./components/alert/alert";
import Loading from "./components/loading/loading";
import "./App.scss";
import { GeneralContext } from "./context/generalContext/generalContext";

function App() {
  const { alert, isLoading } = useContext(GeneralContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={LOGIN} component={Login} />
          <Route exact path={RECOVER} component={Login} />
          <Route path={POST_AUTH_ROUTES} component={PostAuth} />
        </Switch>
      </Router>
      {isLoading && <Loading />}
      {alert.showAlert && (
        <AlertModal alertMessage={alert.message} alertType={alert.type} />
      )}
    </div>
  );
}

export default App;
