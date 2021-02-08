import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./config/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./views/app/App";
import { ApolloProvider } from "@apollo/client";
import "./assets/style/index.scss";
import  productHuntService  from "./services/productHuntService";

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={productHuntService.client}>
      <Router>
        <Suspense fallback={<div />}>
          <App />
        </Suspense>
      </Router>
    </ApolloProvider>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
