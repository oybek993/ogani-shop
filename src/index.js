import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <div>
        <Route component={App} />
        <Route path='/home'/>


      </div>
    </BrowserRouter>,
  document.getElementById('root')
);

