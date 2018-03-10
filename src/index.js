import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';

import VisibleGame from './containers/VisibleGame'
import { store } from './ducks/store.js'
import './main.sass';

// ========================================
setTimeout(() => { // God told me TODO this
  ReactDOM.render(
    <Provider store={store}>
      <VisibleGame store={store}/>
    </Provider>,
    document.getElementById('root')
  );
});
