import React from 'react';
import './App.css';
import Stream from './components/Stream/presenter';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers/index'
import Middleware from './middleware'
import * as actions from './actions'

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];
const store=createStore(rootReducer,Middleware);
store.dispatch(actions.setTracks(tracks))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Stream />
      </div>
    </Provider>
  );
}

export default App;
