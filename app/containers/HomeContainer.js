
import React from 'react';
//链接reducer
import {connect} from 'react-redux';
import HomePage from '../pages/HomePage';
import SearchBar from '../components/SearchBar';
import {
    Image
} from 'react-native';
import Images from '../images/images';

class HomeContainer extends React.Component{
    static navigationOptions = {
        header:(<SearchBar/>),
        tabBarLabel:'首页',
        tabBarIcon: ({ focused }) => (
            <Image
                source={focused?Images.homeSelected:Images.home}
                style={{width:26,height:26}}
            />
        )
    };

    render(){
        return(
            <HomePage {...this.props}/>
        )
    }
}

export default connect((state)=>{
    return {homeReducer} = state;
})(HomeContainer);