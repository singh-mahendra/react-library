import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reducers from "./reducers/index";
import "./styles.css";
import AddBookPage from "./containers/AddBookPage";
import ListBookPage from "./containers/ListBookPage";

const store = createStore(reducers);

const AppJsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

function App() {
  return (
    <div className="App">
      <h1>Book Library</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book/add">Add Book</Link>
              </li>
              <li>
                <Link to="/book/list">List All Books</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/book/add">
              <AddBookPage />
            </Route>
            <Route path="/book/list">
              <ListBookPage />
            </Route>
            <Route path="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(AppJsx, rootElement);
