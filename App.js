import *as React from 'react'
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import CheckUpNavigator from './src/navigation/CheckUpNavigator'

import symptomsReducer from  './src/store/symptoms-reducer';

const rootReducer = combineReducers({
  symptoms: symptomsReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));
export default function App() {
  return (
   <Provider store={store} >
      <CheckUpNavigator/>
   </Provider>
  
  
  )
}


