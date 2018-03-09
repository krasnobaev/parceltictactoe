import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game'
import './main.sass';

// ========================================
setTimeout(() => { // God told me TODO this
  ReactDOM.render(<Game />, document.getElementById('root'));
});
