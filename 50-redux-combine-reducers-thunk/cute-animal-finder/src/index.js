import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/pure-min.css';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

// Provider <== provides store for the rest of the App
// store =>
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
