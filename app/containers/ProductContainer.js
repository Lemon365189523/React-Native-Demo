
import React from 'react';
import {
    View
} from  'react-native';
import ProductPage from '../pages/ProductPage';

export default class ProductContainer extends React.Component {
    static navigationOptions = {
        title: '商品'
    };

    render (){
        return(
            <ProductPage/>
        )
    }
}

