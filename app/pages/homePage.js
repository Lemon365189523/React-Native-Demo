
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import SearchBar from '../components/SearchBar';
import {homelayout} from '../actions/homeAction';
import LodingView from '../components/LodingView';

export default class HomePage extends React.Component{

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(homelayout());
    }

    render(){
        const {homeReducer} = this.props;
        let layout = homeReducer.layout;
        return(
            <View>
                <SearchBar/>
                {/*<LodingView/>*/}
                <Text>
                    首页 {layout}
                </Text>
            </View>
        )
    }
}