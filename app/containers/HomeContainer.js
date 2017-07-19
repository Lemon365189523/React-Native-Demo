
import React from 'react';
//链接reducer
import {connect} from 'react-redux';
import HomePage from '../pages/HomePage';
import SearchBar from '../components/SearchBar';

class HomeContainer extends React.Component{
    static navigationOptions = {
        header:(<SearchBar/>)

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