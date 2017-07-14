
import React from 'react';
//链接reducer
import {connect} from 'react-redux';
import HomePage from '../pages/homePage';

class HomeContainer extends React.Component{
    render(){
        return(
            <HomePage {...this.props}/>
        )
    }
}

export default connect((state)=>{
    return {homeReducer} = state;
})(HomeContainer);