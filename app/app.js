
import React from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import AppMain from './containers/AppMain';

export default class App extends React.Component {
    render(){
        return(
            <AppMain/>
        )
    }
}