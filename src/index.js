import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(config => {
    return config;
  }, error => {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(response => {
    return response;
  }, error => {
    return Promise.reject(error);
  });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
