import React from 'react';
import ReactDOM from 'react-dom';
import DataFilter from './containers/datafilter';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}>
                  <DataFilter/>
                </Provider>,document.getElementById('root'));
