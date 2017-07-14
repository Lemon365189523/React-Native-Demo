
import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import store from './store/store';

export default class Main extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}