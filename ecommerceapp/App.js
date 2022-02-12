import React from 'react';
import type {Node} from 'react';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import MainNavigation from './src/Navigation/MainNavigation';
import reducer from './src/Store/Reducer';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
