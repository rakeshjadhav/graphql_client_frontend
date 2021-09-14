import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './index.css';

import App from './App';

// Add GraphQL Endpoint from the API server
const httpLink = createHttpLink({
  uri: "http://localhost:4000/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});



ReactDOM.render(
  <React.StrictMode>


     <ApolloProvider client={client}>
         <App />
    </ApolloProvider>

    
  </React.StrictMode>,
  document.getElementById('root')
);

