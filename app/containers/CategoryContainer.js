import React from 'react';
import CategoryPage from '../pages/CategoryPage';
import {
    Image
} from 'react-native';
import Images from '../images/images';

export default class CategoryContainer extends React.Component {
    static navigationOptions = {
        title: '分类',
        tabBarLabel:'分类',
        tabBarIcon: ({ focused }) => (
            <Image
                source={focused?Images.categorySelected:Images.category}
                style={{width:26,height:26}}
            />
        )
    };

    render(){
        return(
            <CategoryPage/>
        )
    }
}