import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dotenv from "dotenv";
import App from './pages/app/App'
import reportWebVitals from './tests/web-vitals/reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
});

dotenv.config({path: __dirname+'../.env'});
console.log(process.env.REACT_APP_DB_URL)

ReactDOM.render(
  <Router>
    <ApolloProvider client = {client}>
      <Route path="/">
        <App />
      </Route>
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log("yuermum"));
