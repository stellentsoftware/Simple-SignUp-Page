import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = new HttpLink({ uri: 'http://localhost:4002/graphql' })
const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})


ReactDOM.render(<ApolloProvider client={client}>
      <App/>
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
