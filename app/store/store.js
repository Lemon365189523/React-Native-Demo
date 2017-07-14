
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';//异步操作
//引入所有的reducers.
import reducers from '../reducers/reducers';
//配置store信息
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducers);

export default store;

