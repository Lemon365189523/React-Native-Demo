
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../reducers/homeReducer';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware({
    homeReducer,
});

export default store;

