import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./config/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./views/app/App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import "./assets/style/index.scss";
const link = from([
  new HttpLink({ uri: "https://api.producthunt.com/v2/api/graphql",  headers: {Authorization: "Bearer V4Qf5vXQs3vVkxnA05gfXsdd5TotkoJYgR52XRKdTZA" , Accept: "application/json", Host: "api.producthunt.com" }, }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
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
