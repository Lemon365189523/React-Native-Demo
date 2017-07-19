import React from 'react';
import CategoryPage from '../pages/CategoryPage';

export default class CategoryContainer extends React.Component {
    static navigationOptions = {
        title: '分类',

    };

    render(){
        return(
            <CategoryPage/>
        )
    }
}