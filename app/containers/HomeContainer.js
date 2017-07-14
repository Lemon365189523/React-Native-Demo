
import React from 'react';
import {
    View,
    Text
} from 'react-native';

import SearchBar from '../components/SearchBar';
import LodingView from '../components/LodingView';

export default class HomeContainer extends React.Component{
    render(){
        return(
            <View>
                <SearchBar/>
                {/*<LodingView/>*/}
                <Text>
                    首页
                </Text>
            </View>
        )
    }
}